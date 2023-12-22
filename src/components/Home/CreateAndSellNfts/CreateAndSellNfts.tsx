import Image from "next/image";
import React from "react";

const CreateAndSellNfts = () => {
  return (
    <div className="common flex items-center justify-between gap-5 md:flex-row-reverse flex-col ">
      <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
        <h1 className="text-4xl font-bold font-ultra text-gray-900 sm:text-5xl">
          CREATE AND SELL YOUR NFTS
        </h1>
        <p className="relative mt-6 text-[14px] leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
          Create your own NFTs and sell them on our marketplace. You can also
          buy NFTs from other creators.if you are a creator, you can also sell
          your NFTs on our marketplace. we are providing you a platform to sell
          your NFTs.Also you can buy NFTs from other creators.
        </p>
      </div>
      <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0  md:flex-row-reverse">
        <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80 ">
          <div className="relative">
            <Image
              src="https://img.freepik.com/premium-vector/trendy-simple-fluid-abstract-background-with-dynamic-wave-lines-paper-cut-effect_323324-1092.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702252800&semt=ais"
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              width={528}
              height={528}
            />

            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
          <div className="relative">
            <Image
              src="https://img.freepik.com/premium-photo/colorful-mountain-landscape-with-blue-yellow-background_635062-802.jpg"
              alt=""
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              width={528}
              height={528}
            />

            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <Image
              src="https://img.freepik.com/premium-vector/gradient-liquid-abstract-background_52683-60461.jpg?w=360"
              alt="s"
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              width={528}
              height={528}
            />

            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAndSellNfts;
