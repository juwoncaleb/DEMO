import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/Common";
import Hero from "@/components/About/Hero";
import About from "@/components/About/About";
import Purpose from "@/components/About/Purpose";
import Values from "@/components/About/Values";
import Team from "@/components/About/Team";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Common/Footer";
import Statistics from "@/components/About/Statistics";
import Listing from "@/components/About/Listing";

export default function AboutView() {
  return (
    <Box backgroundColor="#fffcf8">
      <Navbar />
      <Hero />
      <About />
      <Purpose />
      <Values />
      <Team />
      <Statistics />
      <Listing />
      <Contact />
      <Footer />
    </Box>
  );
}
