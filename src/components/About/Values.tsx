import React from "react";
import { Box, HStack, Text, Image } from "@chakra-ui/react";

export default function Values() {
  return (
    <Box
      maxWidth="1520px"
      mx="auto"
      px={{ base: "1rem", lg: "4rem" }}
      py={{ base: "64px", lg: "128px" }}
    >
      <Box display="flex" justifyContent="flex-end">
        <Box maxWidth="960px" width="100%">
          {data?.map((item) => (
            <HStack
              key={item.label}
              spacing={0}
              gap={{ base: "19px", lg: "4rem" }}
              py="32px"
              borderBottom="2px solid"
              borderBottomColor="brand.primary"
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box width={{ base: "100%", lg: "55%" }}>
                <Text
                  color="brand.primary"
                  fontSize={{ base: "22.4px", lg: "64px" }}
                  lineHeight={{ base: "33px", lg: "73.6px" }}
                  letterSpacing={{ base: "-0.8px", lg: "-1.6px" }}
                  fontFamily={{ lg: "CabinetGroteskRegular" }}
                >
                  {item.label}
                </Text>
              </Box>

              <Box width={{ base: "100%", lg: "45%" }} maxW="384px">
                <Text
                  color="brand.primary"
                  fontSize="16px"
                  lineHeight={{ base: "27px", lg: "27.2px" }}
                >
                  {item.description}
                </Text>
              </Box>
            </HStack>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const data = [
  {
    label: "Communication",
    description:
      "Clear and frequent communication is essential for building trust and ensuring our clients are always informed and up-to-date throughout the buying or selling process.",
  },
  {
    label: "Knowledgeable",
    description:
      "Committed to staying up-to-date with the latest trends and developments in the luxury real estate market, allowing us to provide his clients with expert advice and guidance.",
  },
  {
    label: "Available",
    description:
      "Real estate transactions can be time-sensitive. We are always available to assist our clients, whether it’s answering questions, arranging property viewings, or negotiating.",
  },
  {
    label: "Personal",
    description:
      "We provide personalized attention and tailored services to ensure our clients have a stress-free and enjoyable real estate experience that meet their needs.",
  },
];
