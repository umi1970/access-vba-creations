import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PartnerSection from '../components/home/PartnerSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PartnerSection />
    </div>
  );
};

export default Index;