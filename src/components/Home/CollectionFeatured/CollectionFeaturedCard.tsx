import Image from "next/image";
import React from "react";

type CollectionFeaturedCardProps = {
  item: {
    images: string[];
    title: string;
    name: string;
    image: string;
    total: number;
  };
};

const CollectionFeaturedCard = ({ item }: CollectionFeaturedCardProps) => {
  return (
    <div className="bg-white shadow shadow-indigo-200 p-3 rounded-xl">
      <div className="grid grid-rows-3 grid-flow-col gap-4 w-full h-[300px]">
        {item?.images?.map((image: string, index: number) => (
          <Image
            key={index}
            src={image}
            alt="Picture of the author "
            width={300}
            height={300}
            className={`${
              index === 0
                ? "row-span-3  md:w-[300px] h-full"
                : "col-span-2 w-[150px] h-[90px]"
            }  rounded-lg`}
          />
        ))}
      </div>

      <h3 className="text-[18px] font-semibold my-[15px]">{item.title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 font-normal">
          <Image
            src={item.image}
            alt="Picture of the author "
            width={20}
            height={20}
            className="rounded-full"
          />
          <span>{item.name}</span>
        </div>

        <button className=" rounded-full px-4 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all ease-in-out duration-500">
          Total {item.total} Items
        </button>
      </div>
    </div>
  );
};

export default CollectionFeaturedCard;
