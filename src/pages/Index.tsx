import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import MenuCategories from "@/components/MenuCategories";
import HowItWorks from "@/components/HowItWorks";
import FeaturedDeals from "@/components/FeaturedDeals";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeStrip variant="primary" />
      <MenuCategories />
      <MarqueeStrip variant="muted" />
      <HowItWorks />
      <FeaturedDeals />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
