import React from "react";
import Logo from "../Logo/Logo";

const LoadingSpinner = () => {
  return (
    <div className="h-screen text-4xl flex justify-center items-center">
      <div>
        <Logo></Logo>
      </div>
      <h1>Loading.......</h1>
    </div>
  );
};

export default LoadingSpinner;
