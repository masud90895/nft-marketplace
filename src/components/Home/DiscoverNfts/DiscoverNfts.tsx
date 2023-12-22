"use client";
import { DiscoverNftsList } from "@/constants/DiscoverNftsList";
import React, { use, useEffect } from "react";
import { IoFilter } from "react-icons/io5";
import DiscoverNftsCard from "./DiscoverNftsCard";

const FilterData = [
  {
    id: 1,
    name: "All Categories",
  },
  {
    id: 2,
    name: "Art",
  },
  {
    id: 3,
    name: "Celebrities",
  },
  {
    id: 4,
    name: "Gaming",
  },
  {
    id: 5,
    name: "Sport",
  },
  {
    id: 6,
    name: "Music",
  },
  {
    id: 7,
    name: "Crypto",
  },
];

const DiscoverNfts = () => {
  const [filter, setFilter] = React.useState("All Categories");

  let DiscoverDatas = DiscoverNftsList;

  const DiscoverData = (data: string) => {
    if (data === "All Categories") {
      DiscoverDatas = DiscoverNftsList;
    } else {
      const filterData = DiscoverNftsList.filter(
        (item) => item.category === data
      );
      DiscoverDatas = filterData;
    }
  };

  useEffect(() => {
    DiscoverData(filter);
  }, [filter]);

  return (
    <div className="common my-[50px]">
      {/* title */}
      <h1 className="text-3xl font-bold  text-gray-800 font-ultra">
        DISCOVER MORE NFTS
      </h1>

      {/* filter */}

      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="flex gap-2 mt-4 flex-wrap ">
          {FilterData.map((item) => (
            <button
              onClick={() => {
                // DiscoverData(item.name);
                setFilter(item.name);
              }}
              key={item.id}
              className={`px-4 py-2 rounded-full font-kanit  ${
                filter === item.name
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-800 "
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button className="flex gap-1 items-center text-indigo-600 border px-4 py-2 rounded-full bg-gray-100">
          <IoFilter /> All Filters
        </button>
      </div>

      {/* cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between my-[30px]">
        {DiscoverDatas.map((item, i) => (
          <DiscoverNftsCard key={i} item={item} />
        ))}
      </div>

      {/* more NFTs */}

      <div className="flex justify-center items-center text-[12px]">
        <button className="hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-full border border-indigo-600 text-indigo-600">
          More NFTs
        </button>
      </div>
    </div>
  );
};

export default DiscoverNfts;
