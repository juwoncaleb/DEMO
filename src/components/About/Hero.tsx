import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useViewportHeight } from "@/hooks/useViewport";

export default function Hero() {
  const height = useViewportHeight();

  return (
    <Box height={height} minHeight={height}>
      <Box className="about_hero_background" height={height} minHeight={height}>
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
            <Box
              width="100%"
              display="flex"
              alignItems="flex-end"
              flexDir="column"
              gap={{ base: "", lg: "40px" }}
            >
              <Text color="#FFFFFF" fontSize="16px" lineHeight="27.2px">
                For over 20 years we&apos;ve been helping potential
                <br />
                buyers find the home of their dreams.
              </Text>

              <Text
                color="#FFFFFF"
                fontSize={{ base: "48px", lg: "88px" }}
                lineHeight={{ base: "57px", lg: "105.6px" }}
                letterSpacing={{ base: "-1.6px", lg: "-2.4px" }}
                fontFamily="CabinetGroteskRegular"
                mb="3rem"
              >
                Experience that you need with an agency you can trust.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
