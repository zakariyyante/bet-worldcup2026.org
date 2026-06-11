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
    id: "tenobet",
    name: "TenoBet",
    logo: "/logos/TenoBet.svg",
    rating: 9.0,
    bonus: "SPORTS WELCOME BONUS 300% UP TO €3,000",
    url: "https://go.afftrackio.com/visit/?bta=35487&nci=5355&utm_campaign=Tenobet-GA02&afp=",
    isMobile: true,
    votes: 1105,
  },
  {
    id: "gladiatorsbet",
    name: "GladiatorsBet",
    logo: "/logos/GladiatorsBet.svg",
    rating: 9.2,
    bonus: "WELCOME SPORTS FREEBET UP TO £100 FREEBET",
    url: "https://go.froggypartners.com/visit/?bta=36012&nci=7052&afp1=GladiatrosBet-GA02&afp=",
    isMobile: true,
    votes: 1340,
  },
  {
    id: "betnjet",
    name: "BetNJet",
    logo: "/logos/betnjet.svg",
    rating: 9.0,
    bonus: "SPORT Welcome Bonus: 180% up to £1700",
    url: "https://gtrfk.com/jb61ar0ve?subid=BetNJet-GA02&visit_id=",
    isMobile: true,
    votes: 1105,
  },
  {
    id: "bananzia",
    name: "Bananzia",
    logo: "/logos/bananzia.svg",
    rating: 9.2,
    bonus: "Casino Welcome Bonus 300% up to £200 + 50 FS!",
    url: "https://bestcpa.online/click?o=510&a=75&aff_click_id=GA02",
    isMobile: true,
    votes: 1340,
  },
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
