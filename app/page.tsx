import DiveIntoMain from "./components/DiveIntoMain";
import HowWeBuildMain from "./components/HowWeBuildMain";
import IntroductionAndAboutMain from "./components/IntroductionAndAboutMain";
import JoinHydraMain from "./components/JoinHydraMain";
import TechnologiesHardwareMain from "./components/TechnologiesHardwareMain";
import WhyBuildMain from "./components/WhyBuildMain";

export default function Home() {
  return (
    <main className="mt-24 flex flex-col lg:gap-25 gap-10">
      <DiveIntoMain/>
      <IntroductionAndAboutMain/>
      <WhyBuildMain/>
      <TechnologiesHardwareMain/>
      <HowWeBuildMain/>
      <JoinHydraMain/>
    </main>
  );
}
