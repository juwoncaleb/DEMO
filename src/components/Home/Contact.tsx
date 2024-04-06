import { Box, Center, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Contact() {
  return (
    <Box backgroundColor="brand.primary">
      <Box
        maxWidth="1520px"
        mx="auto"
        px={{ base: "1rem", lg: "4rem" }}
        py={{ base: "64px", lg: "128px" }}
      >
        <Text
          color="#FFFFFF"
          fontSize={{ base: "48px", lg: "88px" }}
          letterSpacing={{ base: "-1.6px", lg: "-2.4px" }}
          lineHeight={{ base: "57px", lg: "105px" }}
          fontFamily="CabinetGroteskRegular"
          textAlign="center"
          maxWidth="800px"
          mx="auto"
        >
          Let’s find your dream home.
        </Text>

        <Box mx="auto" width="fit-content">
          <Link href="/contact">
            <Box display="flex" mt="19px" alignItems="center" p="8px">
              <Text color="text.light" mr={{ base: "5px", lg: "16px" }}>
                Get in touch
              </Text>

              <Center
                color="text.light"
                boxSize="40px"
                borderRadius="full"
                border="1px solid"
                borderColor="text.light"
                _hover={{ bg: "#FFFFFF", color: "brand.primary" }}
              >
                <GoArrowUpRight size="1.5rem" />
              </Center>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
