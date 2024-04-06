import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Common";
import { useRouter } from "next/router";
import { listings } from "@/lib/data/listings";
import Hero from "@/components/Listings/ListingDetails/Hero";
import Details from "@/components/Listings/ListingDetails/Details";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Common/Footer";

export default function ListingDetailsView() {
  const router = useRouter();
  const { id } = router.query;

  function makeTitle(slug: string) {
    var words = slug?.split("-");

    for (var i = 0; i < words?.length; i++) {
      var word = words[i];
      words[i] = word?.charAt(0).toLowerCase() + word.slice(1);
    }

    return words?.join(" ");
  }

  const currentListing = listings.find((item) => {
    const _title = makeTitle(id as string);

    return item.name.toLowerCase() === _title;
  });

  return (
    <Box backgroundColor="#fffcf8">
      <Navbar />
      <Hero coverImage={currentListing?.cover_image || ""} />
      <Details currentListing={currentListing} />
      <Contact />
      <Footer />
    </Box>
  );
}
