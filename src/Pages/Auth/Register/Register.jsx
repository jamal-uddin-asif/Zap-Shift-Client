import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../../Components/Container/Container";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <div className=" items-center flex-col">
        {/* <div className="text-left">
        <h1>Create an Account</h1>
        <p>Register with ZapShift</p>
        </div> */}
        <div>
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <br />
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 m-0 p-0">Email required</p>
              )}
              <br />
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
                className="input"
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn w-full btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
