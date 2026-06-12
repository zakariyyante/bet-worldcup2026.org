import { headers } from "next/headers";
import { brands } from "@/app/data/brands";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import BrandCard from "@/app/components/BrandCard";
import DisclaimerBar from "@/app/components/DisclaimerBar";
import AboutSection from "@/app/components/AboutSection";
import Footer from "@/app/components/Footer";
import MobileModal from "@/app/components/MobileModal";

interface HomePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const gclidValue =
    typeof params.gclid === "string" ? params.gclid : undefined;

  const headerList = await headers();
  const userAgent = headerList.get("user-agent") || "";
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);

  // Filter brands: isMobile: true brands only shown to mobile users with gclid
  const filteredBrands = brands.filter((brand) => {
    if (brand.isMobile) {
      return !!gclidValue && isMobile;
    }
    return true;
  });

  const hasMobileBrands = brands.some((b) => b.isMobile);
  const showModal = !!gclidValue && isMobile && hasMobileBrands;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {showModal && (
        <MobileModal brands={brands} gclidValue={gclidValue!} />
      )}

      <Header isMobileTrue={showModal} />

      <main className="flex-1">
        <Hero isMobileTrue={showModal} />

        {/* Brand Cards Section */}
        <section id="brands" className="py-12 sm:py-16 felt-texture">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-12">
              <div
                className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  color: "#4ADE80",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                {showModal ? "New Instant Casinos" : "Top Expert Picks"}
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {showModal ? (
                  <>
                    New Instant <span className="green-text italic">Casinos</span>
                  </>
                ) : (
                  <>
                    Best UK <span className="green-text italic">Betting</span>{" "}
                    <span className="gold-text">Sites</span> 2026
                  </>
                )}
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                {showModal 
                  ? "Ranked by our experts based on payouts, bonuses, and game variety."
                  : "Ranked by our experts based on bonuses, odds, and World Cup 2026 market depth."}
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 gap-5">
              {filteredBrands.map((brand, index) => (
                <BrandCard
                  key={brand.id}
                  brand={brand}
                  rank={index + 1}
                  gclidValue={gclidValue}
                />
              ))}
            </div>
          </div>
        </section>

        <DisclaimerBar />

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
