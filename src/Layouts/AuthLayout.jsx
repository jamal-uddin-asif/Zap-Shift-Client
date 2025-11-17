import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import Container from "../Components/Container/Container";

const AuthLayout = () => {
  return (
    <div>
      <Container>
        <Logo></Logo>
        <div className="flex ">
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <div className="flex-1">
            <img src={authImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
