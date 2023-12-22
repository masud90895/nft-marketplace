import { CollectionFeaturedList } from "@/constants/CollectionFeaturedList";
import Image from "next/image";
import React from "react";
import CollectionFeaturedCard from "./CollectionFeaturedCard";

const CollectionFeatured = () => {
  return (
    <div className="common w-full mt-[50px]">
      <h1 className="text-3xl font-bold  text-gray-800 font-ultra">
        COLLECTION FEATURED NFTS
      </h1>

      {/*  */}

      <div className="my-[20px] ">
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {CollectionFeaturedList.map((item, index) => (
            <CollectionFeaturedCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionFeatured;
