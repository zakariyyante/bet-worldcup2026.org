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
    name: "Bet365",
    logo: "/logos/bet365.svg",
    bonus: "Bet £10 Get £30 in Free Bets",
    url: "https://www.bet365.com/affiliates/?affiliate=365_01234567&clickid=",
    isMobile: true,
    votes: 48312,
  },
  {
    name: "William Hill",
    logo: "/logos/williamhill.svg",
    bonus: "40 Free Spins + £30 Matched Bet",
    url: "https://promos.williamhill.com/betting/?btag=a_12345b_6789&clickid=",
    isMobile: true,
    votes: 39541,
  },
  {
    name: "Betway",
    logo: "/logos/betway.svg",
    bonus: "Matched Deposit up to £30",
    url: "https://betway.com/en/sports/?btag=p56789-q0001&clickid=",
    isMobile: true,
    votes: 31204,
  },
  {
    name: "Paddy Power",
    logo: "/logos/paddypower.svg",
    bonus: "£20 Money Back as Cash if Bet Loses",
    url: "https://www.paddypower.com/?clickid=",
    isMobile: false,
    votes: 27893,
  },
  {
    name: "Sky Bet",
    logo: "/logos/skybet.svg",
    bonus: "Bet £10 Get £40 in Free Bets — Bet Builder",
    url: "https://skybet.com/promos/worldcup?clickid=",
    isMobile: false,
    votes: 24167,
  },
  {
    name: "Ladbrokes",
    logo: "/logos/ladbrokes.svg",
    bonus: "£20 in Free Bets + £10 Casino Bonus",
    url: "https://www.ladbrokes.com/offers/?aff=wc26&clickid=",
    isMobile: false,
    votes: 21388,
  },
  {
    name: "Coral",
    logo: "/logos/coral.svg",
    bonus: "Bet £5 Get £20 in Free Bets",
    url: "https://www.coral.co.uk/offers/?aff=wc26&clickid=",
    isMobile: false,
    votes: 18745,
  },
  {
    name: "Unibet",
    logo: "/logos/unibet.svg",
    bonus: "£40 Welcome Bonus + Free Bet Insurance",
    url: "https://www.unibet.co.uk/betting?affiliateId=affwc26&clickid=",
    isMobile: false,
    votes: 15632,
  },
  {
    name: "888sport",
    logo: "/logos/888sport.svg",
    bonus: "Bet £10 Get £30 Free Bets + Extra Spins",
    url: "https://www.888sport.com/?affid=1234567&clickid=",
    isMobile: false,
    votes: 12901,
  },
  {
    name: "Betfair",
    logo: "/logos/betfair.svg",
    bonus: "Exchange — Bet £10 Get £30 in Free Bets",
    url: "https://promotions.betfair.com/betfair-exchange/?aff=wc26&clickid=",
    isMobile: false,
    votes: 11276,
  },
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
