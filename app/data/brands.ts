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
    id: "bananzia",
    name: "Bananzia",
    logo: "/logos/bananzia.svg",
    rating: 10,
    bonus: "Casino Welcome Bonus 300% up to £3000 + 300 FS!",
    url: "https://bestcpa.online/click?o=510&a=36&link_id=818&sub_id1=Bananzia-GA02&aff_click_id=",
    isMobile: true,
    votes: 1340,
  },
  {
    id: "zombillion",
    name: "Zombillion",
    logo: "/brands/zombillion.svg",
    rating: 9.0,
    bonus: "Welcome Pack 250% up to £4000 + 200 FS",
    url: "https://direct.club.partners/click?pid=19&offer_id=33&l=1778175466&sub2=Zombillion-GA02&sub1=",
    isMobile: true,
    votes: 1105,
  },

  {
    id: "spinpolo",
    name: "SpinPolo",
    logo: "/logos/spinpolo.webp",
    rating: 9.8,
    bonus: "777% Up To £7777 + 385FS + 300k Chips",
    url: "https://direct.reradirectbox.com/click?pid=75&offer_id=857&l=1778754174&sub2=SpinPolo-GA02&sub1=",
    isMobile: true,
    votes: 1105,
  },
  
  
  {
    id: "daytonaspin",
    name: "DaytonaSpin",
    logo: "/logos/daytonaspin.svg",
    rating: 9.5,
    bonus: "255% Up To 4500 £ + 255 FS",
    url: "https://direct.reradirectbox.com/click?pid=75&offer_id=345&l=1774277506&sub2=DaytonaSpin-GA02&sub1=",
    isMobile: true,
    votes: 1340,
  },
  // {
  //   id: "rollyspin",
  //   name: "RollySpin",
  //   logo: "/logos/RollySpin.svg",
  //   rating: 9.2,
  //   bonus: "255% Up To 4500 £ + 255 FS",
  //   url: "https://bestcpa.online/click?o=469&a=75&aff_click_id=GA02",
  //   isMobile: true,
  //   votes: 1340,
  // },
  
  
  
  
  
  
  

  
  

  
  
  // {
  //   id: "vegashero",
  //   name: "VegasHero",
  //   logo: "/brands/VegasHero.png",
  //   rating: 9.5,
  //   bonus: "125% UP TO £1,250 + 250 FS",
  //   url: "https://vgr.lynmonkel.com/?mid=314792_2079715&subid=VegasHero-SL2UK1&clickid=",
  //   isMobile: true,
  //   votes: 1842,
  // },
  // {
  //   id: "gladiatorsbet",
  //   name: "GladiatorsBet",
  //   logo: "/logos/GladiatorsBet.svg",
  //   rating: 9.2,
  //   bonus: "WELCOME SPORTS FREEBET UP TO £100 FREEBET",
  //   url: "https://go.froggypartners.com/visit/?bta=36012&nci=7052&afp1=GladiatrosBet-GA02&afp=",
  //   isMobile: true,
  //   votes: 1340,
  // },
  
  // {
  //   id: "bananzia",
  //   name: "Bananzia",
  //   logo: "/logos/bananzia.svg",
  //   rating: 9.2,
  //   bonus: "Casino Welcome Bonus 300% up to £200 + 50 FS!",
  //   url: "https://bestcpa.online/click?o=510&a=75&aff_click_id=GA02",
  //   isMobile: true,
  //   votes: 1340,
  // },
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
