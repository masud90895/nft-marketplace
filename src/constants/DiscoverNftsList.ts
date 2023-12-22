export type IDiscoverNftsListType = {
  image: string;
  title: string;
  eth: string;
  timeLeft: string;
  length: string;
  category: "Art" | "Collectibles" | "Gaming" | "Sport" | "Music";
};

export const DiscoverNftsList: IDiscoverNftsListType[] = [
  {
    image:
      "https://img.freepik.com/free-vector/gradient-liquid-abstract-background_23-2148899988.jpg",
    title: "This NFT",
    eth: "0.23",
    timeLeft: "3h 45m 23s",
    length: "432",
    category: "Art",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/gradient-liquid-abstract-background_52683-60461.jpg?w=360",
    title: "Name Crtypto",
    category: "Art",
    eth: "0.54",
    length: "332",
    timeLeft: "1h 45m 23s",
  },
  {
    image:
      "https://img.freepik.com/free-vector/colorful-abstract-background_23-2148452003.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1698883200&semt=ais",
    title: "KingCrypto",
    category: "Collectibles",
    eth: "0.12",
    length: "232",
    timeLeft: "2h 45m 23s",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/trendy-simple-fluid-abstract-background-with-dynamic-wave-lines-paper-cut-effect_323324-1092.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702252800&semt=ais",
    title: "ArtCrypto",
    category: "Collectibles",
    eth: "0.23",
    length: "432",
    timeLeft: "3h 45m 23s",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/abstract-dynamic-gradient-background_889227-227.jpg",
    title: "NFT Name",
    category: "Gaming",
    eth: "0.54",
    length: "332",
    timeLeft: "1h 45m 23s",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/abstract-dynamic-gradient-background_889227-227.jpg",
    title: "NFT Name",
    category: "Music",
    eth: "0.12",
    length: "232",
    timeLeft: "2h 45m 23s",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/colorful-abstract-background-with-blue-orange-swirls_889227-10245.jpg",
    title: "NFT Name",
    category: "Sport",
    eth: "0.23",
    length: "432",
    timeLeft: "3h 45m 23s",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/colorful-mountain-landscape-with-blue-yellow-background_635062-802.jpg",
    title: "NFT Name",
    category: "Sport",
    eth: "0.54",
    length: "332",
    timeLeft: "1h 45m 23s",
  },
];
