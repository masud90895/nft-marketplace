"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";

const HeroData = [
  {
    title: "98K+",
    description: "Artwork",
  },
  {
    title: "1.2K+",
    description: "Auction",
  },
  {
    title: "15K+",
    description: "Artist",
  },
];

const cards = [
  {
    title: "Abstr Gradient NFT",
    image: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    name: "Arkhan17",
    backgroundImage: "https://i.ibb.co/LxHdFnM/32.gif",
  },
  {
    title: "Masud",
    image: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    name: "Arkhan17",
    backgroundImage:
      "https://i.ibb.co/ScRpWtY/3d-render-abstract-background-with-flowing-particles.jpg",
  },
  {
    title: "Abstr Gradient NFT",
    image: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    name: "Arkhan17",
    backgroundImage:
      "https://i.ibb.co/MZ6QWRC/pexels-codioful-formerly-gradienta-6985001.jpg",
  },
];

const Hero = () => {
  return (
    <div className="common md:grid grid-cols-4 gap-4 items-center md:my-[100px] my-[30px] justify-between">
      {/* Discover */}
      <div className="col-span-2 lg:w-3/4 ">
        <h3 className="md:text-5xl text-3xl font-ultra font-bold">
          DISCOVER , AND COLLECT DIGITAL ART NFTS
        </h3>
        <p className="my-[8px] text-gray-600">
          Digital market plate for crypto collectibles and non-fungible tokens
          (NFTs). Buy, sell, and discover exclusive digital assets.
        </p>
        <button className="bg-indigo-600 text-white px-[30px] py-[15px] rounded-full my-[20px] border border-indigo-600 hover:bg-white hover:text-indigo-600 transition-all ease-in-out duration-500 ">
          Explore Now
        </button>

        {/*  */}
        <div className="flex gap-3 items-center justify-between">
          {HeroData.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold font-kanit">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="hidden lg:block"></div> */}

      {/* Image */}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper col-span-2 mt-[40px] lg:mt-0"
      >
        {cards.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
            }}
          >
            <div className=" h-full">
              <h3>{item.title}</h3>
              <p>{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
