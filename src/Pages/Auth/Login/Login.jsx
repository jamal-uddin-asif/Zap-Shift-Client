import { Link } from "react-router";
import { useAuth } from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="card mx-auto    w-full sm:min-w-sm shrink-0 ">
        <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
          <div className=" my-3">
            <h1 className="text-3xl font-extrabold">Welcome Back</h1>
            <small>Login with ZapShift</small>
          </div>
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600">Email is required</p>
            )}
            {/* password  */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-[#FAFDF0] hover:bg-green-200 mt-4">
              Login
            </button>
          </fieldset>
          <p className="text-gray-400">
            Don’t have any account? <Link to={'/register'} className="text-blue-700 link-hover"> Register </Link>
          </p>
        <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
