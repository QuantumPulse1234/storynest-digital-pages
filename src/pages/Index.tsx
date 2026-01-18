import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { StoriesSection } from '@/components/home/StoriesSection';
import { BlogSection } from '@/components/home/BlogSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StoriesSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
