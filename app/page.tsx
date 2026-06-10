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

  const hasMobileBrands = brands.some((b) => b.isMobile);
  const showModal = !!gclidValue && hasMobileBrands;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {showModal && (
        <MobileModal brands={brands} gclidValue={gclidValue!} />
      )}

      <Header />

      <main className="flex-1">
        <Hero />

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
                Top Expert Picks
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Best UK{" "}
                <span className="green-text italic">Betting</span>{" "}
                <span className="gold-text">Sites</span>{" "}
                2026
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                Ranked by our experts based on bonuses, odds, and World Cup 2026 market depth.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 gap-5">
              {brands.map((brand, index) => (
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
