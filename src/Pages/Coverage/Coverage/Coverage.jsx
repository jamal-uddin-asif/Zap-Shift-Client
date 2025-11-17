import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null)
  console.log(serviceCenters);
  const position = [23.685, 90.3563];


  const handleSearch = e =>{
    e.preventDefault()
    const location = e.target.location.value
    console.log(location)
    const district = serviceCenters.find(c =>c.district.toLowerCase().includes(location.toLowerCase()))
    console.log(district)
    if(district){
      const coord = [district.latitude, district.longitude]
      mapRef.current.flyTo(coord, 10)
    }


  }
  return (
    <div className="p-5 my-8 rounded-xl bg-white p-10">
      <div className="mb-10 space-y-2">
        <h1 className="text-3xl font-bold">We are available in 64 districts</h1>

        <form onSubmit={handleSearch}>
          <input name="location" type="text" placeholder="Type here" className="input" />
        </form>
      </div>

      <div className="h-[90vh]  ">
        <MapContainer
          
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[80vh]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center) => (
            <Marker position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>City: {center.district}</strong>
                <br />
                <strong>Covered area:</strong> {center.covered_area.join(",")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
