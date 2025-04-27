import Image from "next/image";
import Introduction from "./components/Introduction";
import WhatIsJJWin from "./components/WhatIsJJWin";
import KeyFeatures from "./components/KeyFeatures";
import TrustJJWin from "./components/TrustJJWin";
import DownloadAndRegister from "./components/DownloadAndRegister";
import TipsToWin from "./components/TipsToWin";
import FAQs from "./components/FAQs";
import Conclusion from "./components/Conclusion";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Partners from "./components/Partners";
import ProfileSectionComponent from "./components/ProfileSection";

export default function Home() {
  return (
    <main>
      <Introduction />
      <WhatIsJJWin />
      <KeyFeatures />
      <AdditionalFeatures />
      <TrustJJWin />
      <DownloadAndRegister />
      <TipsToWin />
      <ProfileSectionComponent />
      <Partners />
      <FAQs />
      <Conclusion />
    </main>
  );
}
