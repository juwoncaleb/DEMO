import dynamic from "next/dynamic";
import DefaultHeadSEO from "@/components/SEO";
import VoiceflowIntegration from "../components/voice/voice";

const ServicesView = dynamic(
  () => import("../containers/Services/ServicesView")
);

export default function Services() {
  return (
    <>
      <DefaultHeadSEO title="Services" />
      <ServicesView />
      <VoiceflowIntegration/>
    </>
  );
}
