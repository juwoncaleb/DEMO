import dynamic from "next/dynamic";
import DefaultHeadSEO from "@/components/SEO";

const ListingDetailsView = dynamic(
  () => import("../../containers/Listings/ListingDetailsView")
);

export default function ListingsDetails() {
  return (
    <>
      <DefaultHeadSEO title="Listings" />
      <ListingDetailsView />
    </>
  );
}
