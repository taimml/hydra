import DiveIntoMain from "./components/DiveIntoMain";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowWeBuildMain from "./components/HowWeBuildMain";
import IntroductionAndAboutMain from "./components/IntroductionAndAboutMain";
import JoinHydraMain from "./components/JoinHydraMain";
import TechnologiesHardwareMain from "./components/TechnologiesHardwareMain";
import WhyBuildMain from "./components/WhyBuildMain";

export default function Home() {
  return (
    <main className="mt-24 flex flex-col lg:gap-25 gap-10">
      <Header/>
      <DiveIntoMain/>
      <IntroductionAndAboutMain/>
      <WhyBuildMain/>
      <TechnologiesHardwareMain/>
      <HowWeBuildMain/>
      <JoinHydraMain/>
      <Footer/>
    </main>
  );
}
