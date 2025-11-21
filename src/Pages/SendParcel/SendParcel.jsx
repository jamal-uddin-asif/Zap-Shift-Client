import React, { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
    const {
        register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();
    
    const serviceCenters = useLoaderData()
  
    const senderRegion = useWatch({control,name:'senderRegion'})
    const receiverRegion = useWatch({control, name: 'receiverRegion'})
    

    const regionDuplicate = serviceCenters?.map(s=> s.region)
    const set = new Set(regionDuplicate)
    const regions = Array.from(set)

    const districtsByRegion = region =>{
      // console.log( region)
        const regionDistricts = serviceCenters.filter( s => s.region === region)
        const districts = regionDistricts.map(d=> d.district)
        return districts
    }

    // explore useMemo 
    // useMemo bar bar call howa theke bachay. dependency te kono kichu change hoke useMomo run hobe
  //   const districts = useMemo(() => {
  //  return districtsByRegion(senderRegion);
  // }, [senderRegion]);



  const handleSendParcel = (data) => {
    console.log(data)
    const isDocument = data.parcelType === "document"
    const isSameDistrict = data.senderDistrict === data.receiverDistrict
    
    let cost = 0;
    const parcelWeight = parseFloat(data.parcelWeight)

    if(isDocument){
      cost = isSameDistrict? 60 : 80;
    }
    else{
        if(parcelWeight <= 3){
          cost = isSameDistrict? 110 : 150;
        }
        else{
          const minCharge = isSameDistrict? 110 : 150;
          const extraWeight = parcelWeight - 3;
          const extraCharge = isSameDistrict? extraWeight * 40 : extraWeight * 40 + 40;

          cost = minCharge + extraCharge;
        }
    }
    console.log('cost', cost)
    Swal.fire({
  title: `You have to pay ${cost} taka`,
  text: "Are your agree with the cost?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, I agree!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Done",
      text: `Payment successful ${cost} taka`,
      icon: "success"
    });
  }
});
  };
  return (
    <div className="p-2 md:p-6">
      <div className="space-y-5">
        <h2 className="text-3xl font-bold">Send A Parcel</h2>
        <p className="font-bold text-xl ">Enter your parcel details</p>
      </div>
      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* documents type */}
        <div className="space-x-2 my-4">
          <label className="label">
            {" "}
            <input defaultChecked value={'document'}  type="radio" {...register("parcelType")} />
            Document
          </label>
          <label className="label">
            <input value={'non-document'} type="radio" {...register("parcelType")} />
            Non-Document
          </label>
        </div>

        {/* parcel info Name/wei */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <fieldset className="fieldset">
                <label className="label">Parcel Name</label>
                <input type="text " className="input w-full" {...register('parcelName')} placeholder="Parcel Name" />
            </fieldset>
            <fieldset className="fieldset">
                <label className="label">Parcel Weight (KG)</label>
                <input type="number" className="input w-full" {...register('parcelWeight')} placeholder="Parcel Weight" />
            </fieldset>
        </div>

        {/* Tow cols  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-10">

            {/* Sender details  */}
         <fieldset className="fieldset">
            <h2 className="text-xl font-bold">Sender Details</h2>
                {/* Sender Name  */}
                <label className="label">Sender Name</label>
                <input type="text " className="input w-full" {...register('senderName')} placeholder="Sender Name" />
                {/* Sender Email  */}
                <label className="label">Sender Email</label>
                <input type="email" className="input w-full" {...register('senderEmail')} placeholder="Sender Email" />

                {/* Sender region  */}
                <fieldset>
               <legend className="fieldset-legend">Sender region</legend>
               <select {...register('senderRegion')} defaultValue="Pick a Region" className="select w-full">
               <option disabled={true}>Pick a Region</option>
               {
                regions.map((r, i)=> <option key={i}>{r}</option>)
               }
               </select>
                </fieldset>

                {/* Sender district  */}
                <fieldset>
               <legend className="fieldset-legend">Sender district</legend>
               <select {...register('senderDistrict')} defaultValue="Pick a District" className="select w-full">
               <option disabled={true}>Pick a district</option>
               {
                districtsByRegion(senderRegion).map((r, i)=> <option key={i}>{r}</option>)
               }
               </select>
                </fieldset>

             

                {/* Address */}
                <label className="label">Address</label>
                <input type="text " className="input w-full" {...register('senderAddress')} placeholder="Address" />
                {/* Sender phone no. */}
                <label className="label">Sender Phone No.</label>
                <input type="text " className="input w-full" {...register('senderPhoneNo')} placeholder="Sender Phone No" />
                 {/* Pickup Instruction */}
                <label className="label">Pickup Instruction</label>
                <textarea className="textarea w-full" {...register('pickup_Instruction')} placeholder="Pickup Instruction" rows={5} id=""></textarea>
            </fieldset>

            <fieldset className="fieldset">
                <h2 className="text-xl font-bold">Receiver Details</h2>
                {/* Sender Name  */}
                <label className="label">Receiver Name</label>
                <input type="text " className="input w-full" {...register('receiverName')} placeholder="Receiver Name" />
                 {/* Receiver Email  */}
                <label className="label">Receiver Email</label>
                <input type="email" className="input w-full" {...register('receiverEmail')} placeholder="Receiver Email" />

                {/* Receiver region  */}
                <fieldset>
               <legend className="fieldset-legend">Receiver region</legend>
               <select {...register('receiverRegion')} defaultValue="Pick a Region" className="select w-full">
               <option disabled={true}>Pick a Region</option>
               {
                regions.map((r, i)=> <option key={i}>{r}</option>)
               }
               </select>
                </fieldset>

                {/* Receiver district  */}
                <fieldset>
               <legend className="fieldset-legend">Receiver district</legend>
               <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select w-full">
               <option disabled={true}>Pick a district</option>
               {
                districtsByRegion(receiverRegion).map((r, i)=> <option key={i}>{r}</option>)
               }
               </select>
                </fieldset>

                {/* Address */}
                <label className="label">Receiver Address</label>
                <input type="text " className="input w-full" {...register('receiverAddress')} placeholder="Address" />
                {/* Receiver phone no. */}
                <label className="label">Receiver Phone No.</label>
                <input type="text " className="input w-full" {...register('receiverPhoneNo')} placeholder="Receiver Phone No" />
                {/* Delivery Instruction */}
                <label className="label">Delivery Instruction</label>
                <textarea className="textarea w-full" {...register('delivery_Instruction')} placeholder="Delivery Instruction" rows={5}  id=""></textarea>
            </fieldset>
        </div>
        
        <input type="submit" value="Send Parcel"  className="btn btn-primary text-black"/>
      </form>
    </div>
  );
};

export default SendParcel;
