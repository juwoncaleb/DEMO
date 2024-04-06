import React from "react";
import { Box, HStack, Text, Image } from "@chakra-ui/react";

export default function Purpose() {
  return (
    <Box
      maxWidth="1520px"
      mx="auto"
      px={{ base: "1rem", lg: "4rem" }}
      py={{ base: "64px", lg: "128px" }}
    >
      <HStack
        spacing={0}
        alignItems="flex-end"
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: "40px", lg: "80px" }}
      >
        <Box width={{ base: "100%", lg: "42.6%" }}>
          <Box>
            <Text
              color="brand.primary"
              fontSize={{ base: "22.4px", lg: "64px" }}
              lineHeight={{ base: "33px", lg: "73.6px" }}
              letterSpacing={{ base: "-0.8px", lg: "-1.6px" }}
              fontFamily={{ lg: "CabinetGroteskRegular" }}
            >
              Why I do what I do
            </Text>
            <Text
              my="19.2px"
              color="brand.primary"
              fontSize="16px"
              lineHeight={{ base: "27px", lg: "27.2px" }}
            >
              we are passionate about helping our clients find
              their dream home and achieve their real estate goals. We believe
              that everyone deserves to experience the luxury and exclusivity
              that high-end residential properties can offer.
            </Text>
          </Box>
        </Box>

        <Box width={{ base: "100%", lg: "57.4%" }}>
          <Box height={{ base: "231px", lg: "382px", "2xl": "424" }}>
            <Image
              src="./bug.png"
              alt=""
              height="100%"
              width="100%"
              objectFit="cover"
              objectPosition="left"
            />
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
