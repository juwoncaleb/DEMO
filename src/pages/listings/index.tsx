import dynamic from "next/dynamic";
import DefaultHeadSEO from "@/components/SEO";

const ListingsView = dynamic(
  () => import("../../containers/Listings/ListingsView")
);

export default function Listings() {
  return (
    <>
      <DefaultHeadSEO title="Listings" />
      <ListingsView />
    </>
  );
}
