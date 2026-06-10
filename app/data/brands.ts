export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
  badge?: string;
}

const rawBrands = [
  {
    id: "grosvenor-casinos",
    name: "Grosvenor",
    logo: "/logos/grosvenor.png",
    rating: 10.0,
    bonus: "Play with £40 when you deposit £20",
    url: "https://www.grosvenorcasinos.com/?SUB_ID=NR_79673fd31e5e41a9b31d6c394ea4d&var1=KAR92895826&AFF_ID=10008008011&pid=2340004&utm_source=10008008011&utm_medium=affiliate&utm_channel=affiliate&clickid=",
    isMobile: false,
    votes: 4089,
  }
];

function toId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

const badges = ["", "", "GOLD", "SILVER", "BRONZE"];

export const brands: Brand[] = rawBrands.map((b, i) => ({
  ...b,
  id: toId(b.name),
  rating: parseFloat((10.0 - i * 0.2).toFixed(1)),
  badge: i < 3 ? badges[i + 2] : undefined,
}));
