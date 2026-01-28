import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ApproachSection from "@/components/home/ApproachSection";
import VisualStoriesSection from "@/components/home/VisualStoriesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SubscribeSection from "@/components/home/SubscribeSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <ApproachSection />
        <VisualStoriesSection />
        <StatsSection />
        <TestimonialsSection />
        <SubscribeSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
