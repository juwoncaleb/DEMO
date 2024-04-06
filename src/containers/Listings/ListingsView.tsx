import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Common";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Common/Footer";
import Hero from "@/components/Listings/Hero";
import AllListings from "@/components/Listings/Listings";

export default function ListingsView() {
  return (
    <Box backgroundColor="#fffcf8">
      <Navbar
        linksColor="brand.primary"
        navLogo="/re.png"
        lineColor="#054738"
      />
      <Hero />
      <AllListings />
      <Contact />
      <Footer />
    </Box>
  );
}
