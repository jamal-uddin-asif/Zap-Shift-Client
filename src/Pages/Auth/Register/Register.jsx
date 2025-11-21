import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../../Components/Container/Container";
import { useAuth } from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state || '/'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {

    // console.log(data.photo[0]);
    const profileImage = data.photo[0]

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        // store the image in form data
        const formData = new FormData()
        formData.append('image', profileImage)

        // send the photo to store and get the url 
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`
        axios.post(image_API_URL, formData)
        .then(result=>{

          const updateProfile = {
            displayName: data.name,
            photoURL: result.data.data.url
          }

          updateUserProfile(updateProfile)
          .then(()=>{
            console.log("After update profile")
            toast.success("Registration successful")
            navigate(from)

          }).catch(err=>{
            console.log(err)
          })
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container className=" sm:min-w-sm my-6">
      <div >
        {/* <div className="text-left">
        <h1>Create an Account</h1>
        <p>Register with ZapShift</p>
        </div> */}
        <div>
          <div className=" my-3">
            <h1 className="text-3xl font-extrabold">Create an Account</h1>
            <small>Register with ZapShift</small>
          </div>
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              {/* <br /> */}
              <input
                type="text"
                {...register("name", { required: true })}
                className="input w-full"
                placeholder="name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 m-0 p-0">Name is required</p>
              )}
              <label className="label">Photo</label>
              {/* <br /> */}
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input w-full"
                placeholder="photo"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-600 m-0 p-0">Photo is required</p>
              )}
              <label className="label">Email</label>
              {/* <br /> */}
              <input
                type="email"
                {...register("email", { required: true })}
                className="input w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 m-0 p-0">Email required</p>
              )}
              {/* <br /> */}
              {/* password  */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                })}
                className="input w-full"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must be 6 character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must be one uppercase + one lowercase + one number +
                  one special char + min 6 chars
                </p>
              )}
              {/* <div>
                <a className="link link-hover">Forgot password?</a>
              </div> */}
              <button className="btn w-full bg-[#FAFDF0] mt-4">
                Register Now
              </button>
            </fieldset>
             <p className="text-gray-400">
            Already have an account? <Link state={from} to={'/login'} className="text-blue-700 link-hover"> login</Link>
          </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </Container>
  );
};

export default Register;
