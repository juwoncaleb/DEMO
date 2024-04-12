import React from "react";
import { Box, Text, Image, Avatar } from "@chakra-ui/react";

export default function Review() {
  return (
    <Box
      maxWidth="1520px"
      mx="auto"
      px={{ base: "1rem", lg: "4rem" }}
      py={{ base: "64px", lg: "128px" }}
    >
      <Box
        display="flex"
        gap={{ base: "40px", lg: "80px" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box width={{ base: "100%", lg: "69%" }}>
          <Image
            src="/images/svg/quote-icon.svg"
            alt="Quote icon"
            width="48px"
            height="48px"
          />
          <Text
            mt="19px"
            color="brand.primary"
            fontFamily={{ lg: "CabinetGroteskRegular" }}
            lineHeight={{ base: "33.6px", lg: "73px" }}
            letterSpacing={{ base: "-0.8px", lg: "-1.6px" }}
            fontSize={{ base: "22.4px", lg: "64px" }}
          >
             John made the process of buying my dream home easy and
            stress-free. Her professionalism and attention to detail are
            unparalleled.
          </Text>
        </Box>

        <Box
          width={{ base: "100%", lg: "31%" }}
          display="flex"
          alignItems="flex-end"
        >
          <Box
            display="flex"
            gap="16px"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            
            <Avatar
              boxSize="80px"
              src="https://res.cloudinary.com/da6w53p43/image/upload/v1691622002/645551c254526564e7f2903a_person-2_as2yuy.jpg"
              name="Daniel Roberts"
            />

            <Box color="brand.primary" fontFamily="CabinetGroteskRegular">
              <Text
                lineHeight={{ base: "27px", lg: "36px" }}
                fontSize={{ base: "18px", lg: "24px" }}
              >
                Daniel Roberts
              </Text>
              <Text lineHeight="25px" fontSize="16px">
                New Homeowner
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
