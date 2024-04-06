import dynamic from "next/dynamic";
import DefaultHeadSEO from "@/components/SEO";
const ContactView = dynamic(() => import("../containers/Contact/ContactView"));
import VoiceflowIntegration from "../components/voice/voice";

export default function Listings() {
  return (
    <>
      <DefaultHeadSEO title="Contact" />
      <ContactView />
      <VoiceflowIntegration/>
    </>
  );
}
