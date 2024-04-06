import dynamic from "next/dynamic";
import DefaultHeadSEO from "@/components/SEO";
import VoiceflowIntegration from "../components/voice/voice";
const AboutView = dynamic(() => import("../containers/About/AboutView"));

export default function About() {
  return (
    <>
      <DefaultHeadSEO title="About" />
      <AboutView />
      <VoiceflowIntegration/>
    </>
  );
}
