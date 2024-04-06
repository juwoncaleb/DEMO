import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Common";
import Hero from "@/components/Home/Hero";
import Overview from "@/components/Home/Overview";
import FeaturedListing from "@/components/Home/FeaturedListing";
import Review from "@/components/Home/Review";
import Listing from "@/components/Home/Listing";
import Statistics from "@/components/Home/Statistics";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Common/Footer";

export default function HomeView() {
  return (
    <Box backgroundColor="#fffcf8">
      <Navbar />
      <Hero />
      <Overview />
      <FeaturedListing />
      <Review />
      <Listing />
      <Statistics />
      <Contact />
      <Footer />
    </Box>
  );
}
