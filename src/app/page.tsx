import CollectionFeatured from "@/components/Home/CollectionFeatured/CollectionFeatured";
import CreateAndSellNfts from "@/components/Home/CreateAndSellNfts/CreateAndSellNfts";
import DiscoverNfts from "@/components/Home/DiscoverNfts/DiscoverNfts";
import Hero from "@/components/Home/Hero/Hero";
import NftArt from "@/components/Home/NftArt/NftArt";

export default function Home() {
  return (
    <>
      <Hero />
      <NftArt />
      <CollectionFeatured />
      <CreateAndSellNfts />
      <DiscoverNfts />
    </>
  );
}
