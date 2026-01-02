import AIGuidanceSection from '../components/LandingPage/AIGuidanceSection';
import AlertBanner from '../components/LandingPage/AlertBanner';
import DemoExamples from '../components/LandingPage/DemoExamples';
import EmailForwardingSection from '../components/LandingPage/EmailForwardingSection';
import FamilyProtectionSection from '../components/LandingPage/FamilyProtectionSection';
import HeroSection from '../components/LandingPage/HeroSection';
import ProtectionLevelSection from '../components/LandingPage/ProtectionLevelSection';
import ScamAnalyzer from '../components/LandingPage/ScamAnalyzer';
import StatsCards from '../components/LandingPage/StatsCards';
import Testimonials from '../components/LandingPage/Testimonials';
import WhyChooseSection from '../components/LandingPage/WhyChooseSection';
import ScamRxFeatureSectionAIHotline from '../components/how-it-work/ScamRxFeatureSectionAIHotline';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      <AlertBanner />
      <HeroSection />
      <StatsCards />
      <Testimonials />
      <ScamRxFeatureSectionAIHotline />
      {/* <HowItWorks /> */}
      <DemoExamples />
      <ScamAnalyzer />
      <EmailForwardingSection />
      <FamilyProtectionSection />
      <AIGuidanceSection />
      <ProtectionLevelSection />
      <WhyChooseSection />
    </div>
  );
}