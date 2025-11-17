import React, { Suspense } from "react";
import Banner from "../Banner/Banner";

import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch("./reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <Suspense fallback={<p>Loading...</p>}>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </Suspense>
    </div>
  );
};

export default Home;
