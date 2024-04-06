import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { listings } from "@/lib/data/listings";
import VoiceflowIntegration from "../../components/voice/voice";

import Link from "next/link";

export default function AllListings() {
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  return (
    <Box
      maxWidth="1520px"
      bg="#fffcf8"
      position="relative"
      zIndex={9}
      mx="auto"
      px={{ base: "1rem", lg: "4rem" }}
      py={{ base: "2rem", lg: "4rem" }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap="32px"
      >
        {listings.map((item) => {
          return (
            <Link key={item.name} href={`/listings/${slugify(item.name)}`}>
              <Box>
                {/* Desktop */}
                <Box
                  height="368px"
                  backgroundImage={`url(${item.cover_image})`}
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundPosition="50%"
                  position="relative"
                  display={{ base: "none", lg: "block" }}
                >
                  <div className="hero_overlay" />

                  <Box
                    display="flex"
                    alignItems="flex-end"
                    height="100%"
                    padding="0px 32px 32px"
                    position="relative"
                    justifyContent="space-between"
                    zIndex={99}
                    gap="64px"
                  >
                    <Box color="text.light" fontFamily="CabinetGroteskRegular">
                      <Text
                        fontSize="24px"
                        letterSpacing={{ lg: "-1.6px" }}
                        lineHeight={{ lg: "33.6px" }}
                      >
                        {item.price}
                      </Text>
                      <Text
                        fontSize="40px"
                        letterSpacing={{ lg: "-1.6px" }}
                        lineHeight="46px"
                      >
                        {item.name}
                      </Text>
                    </Box>

                    <Box color="text.light">
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        borderBottom="1px solid"
                        borderBottomColor="text.light"
                        py="6px"
                        width="130px"
                      >
                        <Text fontSize="20px">{item.bedrooms}</Text>
                        <Text fontSize="16px">bedrooms</Text>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        borderBottom="1px solid"
                        borderBottomColor="text.light"
                        py="6px"
                        width="130px"
                      >
                        <Text fontSize="20px">{item.bathrooms}</Text>
                        <Text fontSize="16px">bathrooms</Text>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        borderBottom="1px solid"
                        borderBottomColor="text.light"
                        py="6px"
                        width="130px"
                      >
                        <Text fontSize="20px">{item.square_ft}</Text>
                        <Text fontSize="16px">sq ft</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Mobile */}
                <Box display={{ base: "block", lg: "none" }}>
                  <Box width={{ lg: "343px" }} height="229px">
                    <Image
                      src={item.cover_image}
                      alt="Featured listing"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                    />
                  </Box>

                  <Box textAlign="right" mt="1rem">
                    <Text
                      fontSize="24px"
                      letterSpacing="-1.6px"
                      lineHeight="33px"
                      color="#054738"
                      fontFamily="CabinetGroteskRegular"
                    >
                      {item.price}
                    </Text>
                    <Text
                      fontSize="32px"
                      letterSpacing="-0.8px"
                      lineHeight="48px"
                      color="#054738"
                      fontFamily="CabinetGroteskRegular"
                    >
                      {item.name}
                    </Text>
                  </Box>

                  <Box color="brand.primary" mt="2rem">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      borderBottom="1px solid"
                      borderBottomColor="brand.primary"
                      py="9px"
                    >
                      <Text fontSize="20px">{item.bedrooms}</Text>
                      <Text fontSize="16px">bedrooms</Text>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      borderBottom="1px solid"
                      borderBottomColor="brand.primary"
                      py="9px"
                    >
                      <Text fontSize="20px">{item.bathrooms}</Text>
                      <Text fontSize="16px">bathrooms</Text>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      borderBottom="1px solid"
                      borderBottomColor="brand.primary"
                      py="9px"
                    >
                      <Text fontSize="20px">{item.square_ft}</Text>
                      <Text fontSize="16px">sq ft</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Box>
      <VoiceflowIntegration/>
    </Box>
  );
}
