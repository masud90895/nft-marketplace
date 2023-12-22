import React from "react";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa6";

const NftArts = [
  {
    icon: <MdOutlineBookmarkAdded />,
    title: "Fast Transactions",
    description: "Fast transactions with low fees. 100% uptime since 2018.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Growth Transactions",
    description: "Growth transactions with low fees. 100% uptime since 2018.",
  },
];

const NftArt = () => {
  return (
    <div className="bg-gray-200">
      <div className=" common rounded-md">
        <div className="container mx-auto py-20">
          <div className="lg:flex  justify-between">
            <h2 className="text-2xl font-bold mb-10 font-ultra lg:w-1/4">
              THE AMAZING NFT ARTS OF THE WORLD HERE
            </h2>
            <div className="grid md:grid-cols-2 gap-4 lg:w-2/4">
              {NftArts.map((item, index) => (
                <div key={index} className="flex flex-col ">
                  <div className="flex gap-2 ">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-[14px] font-bold mb-2">{item.title}</h3>
                  </div>
                  <p className="ml-10 text-[12px] -mt-5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftArt;
