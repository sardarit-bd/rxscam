import AlertBanner from '../components/LandingPage/AlertBanner';
import HeroSection from '../components/LandingPage/HeroSection';
import StatsCards from '../components/LandingPage/StatsCards';
import Testimonials from '../components/LandingPage/Testimonials';
import HowItWorks from '../components/LandingPage/HowItWorks';
import DemoExamples from '../components/LandingPage/DemoExamples';
import ScamAnalyzer from '../components/LandingPage/ScamAnalyzer';
import WhyChooseSection from '../components/LandingPage/WhyChooseSection';
import ProtectionLevelSection from '../components/LandingPage/ProtectionLevelSection';
import AIGuidanceSection from '../components/LandingPage/AIGuidanceSection';
import FamilyProtectionSection from '../components/LandingPage/FamilyProtectionSection';
import EmailForwardingSection from '../components/LandingPage/EmailForwardingSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

    <AlertBanner/>
    <HeroSection/>
    <StatsCards/>
    <Testimonials/>
    <HowItWorks/>
    <DemoExamples/>
    <ScamAnalyzer/>
    <EmailForwardingSection/>
    <FamilyProtectionSection/>
    <AIGuidanceSection/>
    <ProtectionLevelSection/>
    <WhyChooseSection/>
    </div>
  );
}