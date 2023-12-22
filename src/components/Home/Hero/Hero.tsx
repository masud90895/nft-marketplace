"use client";
import React, { use, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";

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
    name: "Md Mahafujur Rahaman Masud",
    backgroundImage: "https://i.ibb.co/LxHdFnM/32.gif",
    class: "card1",
  },
  {
    title: "Masud",
    image: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    name: "Arkhan17",
    backgroundImage:
      "https://i.ibb.co/ScRpWtY/3d-render-abstract-background-with-flowing-particles.jpg",
    class: "card2",
  },
  {
    title: "Abstr Gradient NFT",
    image: "https://i.ibb.co/YcjhGgs/IMG-20231111-142014-1.jpg",
    name: "Arkhan17",
    backgroundImage:
      "https://i.ibb.co/MZ6QWRC/pexels-codioful-formerly-gradienta-6985001.jpg",
    class: "card3",
  },
];

const Hero = () => {
  useEffect(() => {
    const text: any = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char: any, i: any) =>
          `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
  }, []);

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
        className="mySwiper col-span-2 mt-[40px] lg:mt-0 relative"
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
            className={item.class}
          >
            <div className=" h-full w-full font-ultra flex flex-col justify-between">
              <div>
                <h3 className="text-white text-2xl">{item.title}</h3>
                <div className="flex items-center gap-3 my-3">
                  <Image
                    src={item.image}
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-full  w-5 h-5 "
                  />

                  <p className="font-kanit text-[12px]">{item.name}</p>
                </div>
              </div>

              {/* footer */}

              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 91%);",
                }}
                className="text-[14px] shadow-xl px-8 py-3 rounded-full flex justify-between"
              >
                <div>
                  <p className="ml-3">Current Bid</p>
                  <p className="flex gap-1 items-center">
                    <FaEthereum /> 0.0001 ETH
                  </p>
                </div>
                <div>
                  <p>Ends in</p>
                  <p className="">12h 30m 20s</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Animated Circle Text Logo Effects */}
        <div className="z-50 absolute top-[200px] -left-[30px] hidden md:block ">
          <div className="circle  ">
            <div className="logo"></div>
            <div className="text bg-neutral-300 rounded-full">
              <p>LIVE AUCTION - LIVE AUCTION - </p>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
