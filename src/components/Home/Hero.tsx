import React from "react";
import { Box, Text, VStack, Center, Image } from "@chakra-ui/react";
import { useViewportHeight } from "@/hooks/useViewport";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Hero() {
  const height = useViewportHeight();

  return (
    <Box height={height} minHeight={height}>
      <Box className="hero_background" height={height} minHeight={height}>
        <div className="hero_overlay" />

        <Box
          height="100%"
          maxWidth="1520px"
          mx="auto"
          px={{ base: "1rem", lg: "4rem" }}
        >
          <VStack
            position="relative"
            zIndex={99}
            height="100%"
            spacing={0}
            alignItems="flex-end"
            justifyContent="flex-end"
            p={{ base: "0px 0px 1.5rem", lg: "16px" }}
          >
            <Link href="/contact">
              <Box display="flex" alignItems="center">
                <Text color="#FFFCF8" mr="16px" lineHeight={{ base: "25.6px" }}>
                  Find your next home
                </Text>
                <Center
                  color="#FFFFFF"
                  boxSize="40px"
                  borderRadius="full"
                  border="1px solid #FFFFFF"
                  _hover={{ bg: "#FFFFFF", color: "brand.primary" }}
                >
                  <GoArrowUpRight size="1.5rem" />
                </Center>
              </Box>
            </Link>

            <Box my={{ base: "1rem", lg: "1.7rem" }}>
              <Text
                color="#FFFCF8"
                fontSize={{ base: "20.8px", lg: "32px" }}
                textAlign="right"
                pl={{ base: "5rem", lg: "0rem" }}
              >
                Luxury Residential Properties in Bahamas .
              </Text>
            </Box>

            <Box width="100%">
              <Image
                src="/images/svg/exclusivity_defined.svg"
                alt="Exclusivity defined"
                width="100%"
                height="auto"
              />
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
