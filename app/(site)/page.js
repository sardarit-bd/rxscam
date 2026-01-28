import AlertBanner from '../components/LandingPage/AlertBanner';
import DemoExamplesAndResult from '../components/LandingPage/DemoExampleAndResult';
import FamilyProtectionSection from '../components/LandingPage/FamilyProtectionSection';
import HeroSection from '../components/LandingPage/HeroSection';
import HowItWorksProfessional from '../components/LandingPage/HowItWorksProfessional';
import ProtectionLevelSection from '../components/LandingPage/ProtectionLevelSection';
import ScamRxEmailForwarding from '../components/LandingPage/Scamrxemailforwarding';
import ScamRxHotline from '../components/LandingPage/ScamRxHotline';
import StatsCards from '../components/LandingPage/StatsCards';
import Testimonials from '../components/LandingPage/Testimonials';
import WhyChooseSection from '../components/LandingPage/WhyChooseSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <AlertBanner />
      <HeroSection />
      <StatsCards />
      <Testimonials />
      <HowItWorksProfessional />
      <DemoExamplesAndResult />
      <ScamRxEmailForwarding />
      <FamilyProtectionSection />
      <ScamRxHotline />
      <ProtectionLevelSection />
      <WhyChooseSection />
    </div>
  );
}