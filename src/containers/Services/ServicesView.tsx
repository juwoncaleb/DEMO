import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Common";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Common/Footer";
import Hero from "@/components/Services/Hero";
import Benefits from "@/components/Services/Benefits";
import About from "@/components/Services/About";

export default function ServicesView() {
  return (
    <Box backgroundColor="#fffcf8">
      <Navbar
        linksColor="brand.primary"
        navLogo="/re.png"
        lineColor="#054738"
      />
      <Hero />
      <Benefits />
      <About />
      <Contact />
      <Footer />
    </Box>
  );
}
