import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Loading from "../../../pages/Loader/Loading";
import Slider from "../Slider/Slider";

const CarouselCompo = () => {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://chef-hunter-server-rho.vercel.app/home-slider/")
      .then((res) => res.json())
      .then((data) => {
        setSliderData(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="h-[600px] w-full  pt-5">
      <Carousel className="">
        {sliderData.map((sd) => (
          <Slider key={sd.id} data={sd} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCompo;
