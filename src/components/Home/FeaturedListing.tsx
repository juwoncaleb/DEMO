import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { useViewportHeight } from "@/hooks/useViewport";

export default function FeaturedListing() {
  const height = useViewportHeight();

  return (
    <Box
      maxWidth="1520px"
      mx="auto"
      px={{ base: "1rem", lg: "4rem" }}
      py={{ base: "64px", lg: "128px" }}
    >
      <Box height={{ lg: height }} minHeight={{ lg: height }}>
        <Box
          height="100%"
          className="featured_listing_backrgound"
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
          >
            <Box color="text.light" fontFamily="CabinetGroteskRegular">
              <Text
                fontSize="32px"
                letterSpacing={{ lg: "-1.6px" }}
                lineHeight={{ lg: "44.8px" }}
              >
                $4,499,000
              </Text>
              <Text
                fontSize="64px"
                letterSpacing={{ lg: "-4px" }}
                lineHeight="73px"
              >
                2934 Pasadena Court
              </Text>
            </Box>

            <Box color="text.light">
              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid"
                borderBottomColor="text.light"
                py="9px"
                width="321px"
              >
                <Text>6</Text>
                <Text>bedrooms</Text>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid"
                borderBottomColor="text.light"
                py="9px"
                width="321px"
              >
                <Text>4</Text>
                <Text>bathrooms</Text>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid"
                borderBottomColor="text.light"
                py="9px"
                width="321px"
              >
                <Text>4,955</Text>
                <Text>sq ft</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display={{ base: "block", lg: "none" }}>
          <Box width={{ lg: "343px" }} height="229px">
            <Image
              src="https://res.cloudinary.com/da6w53p43/image/upload/v1691583952/bedroom_jxd1vg.jpg"
              alt="Featured listing"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>

          <Box textAlign="right" mt="1rem">
            <Text
              fontSize="20px"
              letterSpacing="-1.6px"
              lineHeight="26px"
              color="#054738"
              fontFamily="CabinetGroteskRegular"
            >
              $4,499,000
            </Text>
            <Text
              fontSize="24px"
              letterSpacing="-0.8px"
              lineHeight="36px"
              color="#054738"
              // color="red"
              fontFamily="CabinetGroteskRegular"
            >
              2934 Pasadena Court
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
              <Text fontSize="20px">6</Text>
              <Text fontSize="16px">bedrooms</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom="1px solid"
              borderBottomColor="brand.primary"
              py="9px"
            >
              <Text fontSize="20px">4</Text>
              <Text fontSize="16px">bathrooms</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom="1px solid"
              borderBottomColor="brand.primary"
              py="9px"
            >
              <Text fontSize="20px">4,955</Text>
              <Text fontSize="16px">sq ft</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
