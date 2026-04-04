import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import AboutSection from "@/components/home/AboutSection";
import SetupsSection from "@/components/home/SetupsSection";
import GamesLibrary from "@/components/home/GamesLibrary";
import PricingSection from "@/components/home/PricingSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import GallerySection from "@/components/home/GallerySection";
import LocationSection from "@/components/home/LocationSection";
import { updatePageSEO, pageSEOConfig } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    updatePageSEO({
      ...pageSEOConfig.home,
      canonicalUrl: "https://battletech-gaming-cafe.vercel.app/",
    });
  }, []);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <SetupsSection />
      <GamesLibrary />
      <PricingSection />
      <ReviewsSection />
      <GallerySection />
      <LocationSection />
    </>
  );
};

export default Index;
