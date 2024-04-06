import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <Box pt={{ base: "160px", lg: "192px" }} pb="96px">
      <Box maxWidth="1520px" mx="auto" px={{ base: "1rem", lg: "4rem" }}>
        <HStack
          spacing={0}
          gap={{ base: "40px", lg: "80px" }}
          alignItems="flex-start"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box width={{ base: "100%", lg: "60%" }}>
            <Text
              color="brand.primary"
              fontSize={{ base: "48px", lg: "88px" }}
              fontFamily="CabinetGroteskRegular"
              lineHeight={{ base: "57px", lg: "105px" }}
              letterSpacing={{ base: "-1.6px", lg: "-2.4px" }}
            >
              Let’s talk about working together.
            </Text>

            <HStack
              mt={{ base: "20px", lg: "35px" }}
              spacing={0}
              alignItems="flex-start"
              gap="32px"
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box width={{ base: "100%", lg: "60%" }}>
                <Text
                  color="brand.primary"
                  fontSize={{ base: "", lg: "16px" }}
                  lineHeight={{ base: "", lg: "25px" }}
                >
                  contact@nextmove.com
                </Text>
                <Text
                  mt={{ base: "16px", lg: "20px" }}
                  color="brand.primary"
                  fontSize={{ base: "", lg: "16px" }}
                  lineHeight={{ base: "", lg: "25px" }}
                >
                  123-456-7891
                </Text>
              </Box>

              <Box width={{ base: "100%", lg: "60%" }}>
                <Text color="brand.primary" fontSize="16px" lineHeight="27px">
                  Interested in any properties or have any questions? Then get
                  in touch today and we’ll get back to you as soon as possible.
                </Text>

                <HStack
                  spacing={0}
                  gap="16px"
                  mt={{ base: "24px", lg: "20px" }}
                >
                  <Link href="">
                    <Text
                      color="brand.primary"
                      fontFamily="CabinetGroteskRegular"
                    >
                      Instagram
                    </Text>
                  </Link>
                  <Link href="">
                    <Text
                      color="brand.primary"
                      fontFamily="CabinetGroteskRegular"
                    >
                      LinkedIn
                    </Text>
                  </Link>
                  <Link href="">
                    <Text
                      color="brand.primary"
                      fontFamily="CabinetGroteskRegular"
                    >
                      Facebook
                    </Text>
                  </Link>
                </HStack>
              </Box>
            </HStack>
          </Box>

          <Box width={{ base: "100%", lg: "40%" }}>
            <ContactForm />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
