import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import Container from "../Components/Container/Container";

const AuthLayout = () => {
  return (
    <div className="">
      <Container>
        <div className="md:flex justify-center items-center mig-h-screen ">
          <div className="flex-1 flex justify-center items-center ">
            <div>
              <div className="-ms-10">
                <Logo></Logo>
              </div>
              <Outlet></Outlet>
            </div>
          </div>
          <div className="flex-1 h-screen  bg-[#FAFDF0]">
            <img src={authImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
