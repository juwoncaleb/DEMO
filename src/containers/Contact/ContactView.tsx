import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Common";
import Footer from "@/components/Common/Footer";
import Hero from "@/components/Contact/Hero";

export default function ContactView() {
  return (
    <Box backgroundColor="#fffcf8">
      <Navbar
        linksColor="brand.primary"
        navLogo= "/re.png"
        lineColor="#054738"
      />
      <Hero />
      <Footer />
    </Box>
  );
}
