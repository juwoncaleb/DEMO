import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function Hero({ coverImage }: { coverImage: string }) {
  return (
    <Box
      height={{
        base: "calc(100vh - 160px)",
        lg: "calc(100vh - 180px)",
        "2xl": "calc(100vh - 280px)",
      }}
      bg="purple.200"
      position="relative"
    >
      <div className="hero_overlay_2" />

      <Image
        src={coverImage}
        alt=""
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </Box>
  );
}
