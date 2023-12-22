/* eslint-disable @next/next/no-img-element */
import { IDiscoverNftsListType } from "@/constants/DiscoverNftsList";
import Image from "next/image";
import React from "react";
import { FaEthereum } from "react-icons/fa";

const DiscoverNftsCard = ({ item }: { item: IDiscoverNftsListType }) => {
  return (
    <div className="bg-white shadow-xl p-3 border rounded-lg">
      <div>
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={300}
          className="rounded-lg w-full"
        />

        {/* avatar */}

        <div className="flex -space-x-2 overflow-hidden z-50 -mt-4 ml-[15px] ">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-xl font-bold mt-2"> {item.title}</h1>
      <div className="my-2 flex justify-between items-center">
        <p className="flex items-center gap-1 font-semibold text-green-600">
          {" "}
          <FaEthereum /> {item.eth}
        </p>
        <p className="text-gray-500 font-kanit">1 of {item.length}</p>
      </div>

      <div className="border border-gray-100 my-2" />

      <div className="flex justify-between items-center py-2">
        <p className="bg-gray-200 text-indigo-600 px-3 py-2 rounded-full text-[12px] border hover:border-indigo-600">
          {item.timeLeft} Left
        </p>
        <p className="text-indigo-600 font-light text-[14px] cursor-pointer">
          Place a bid
        </p>
      </div>
    </div>
  );
};

export default DiscoverNftsCard;
