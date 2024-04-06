import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box pt={{ base: "160px", lg: "192px" }}>
      <Box maxWidth="1520px" mx="auto" px={{ base: "1rem", lg: "4rem" }}>
        <Text
          color="brand.primary"
          fontSize={{ base: "48px", lg: "88px" }}
          fontFamily="CabinetGroteskRegular"
          lineHeight={{ base: "57px", lg: "105px" }}
          letterSpacing={{ base: "-1.6px", lg: "-2.4px" }}
        >
          Properties for sale
        </Text>

        <Text
          mt="20px"
          color="brand.primary"
          fontSize={{ base: "", lg: "16px" }}
          lineHeight={{ base: "", lg: "25px" }}
          bg="#fffcf8"
          position="relative"
          zIndex={9}
        >
          Selling some of the nicest houses money can buy.
        </Text>
      </Box>
    </Box>
  );
}
