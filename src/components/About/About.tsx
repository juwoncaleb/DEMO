import React from "react";
import { Box, Center, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function About() {
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
        <Box
          width={{ base: "100%", lg: "50%" }}
          display="flex"
          gap={{ base: "16px", lg: "48px" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box width={{ base: "100%", lg: "50%" }}>
            <Text color="brand.primary" lineHeight="27.2px">
              With over twenty years of experience  selling luxury properties, we
              have developed a deep understanding of the luxury real estate
              market and the needs of high-end clientele.
            </Text>
          </Box>
          <Box width={{ base: "100%", lg: "50%" }}>
            <Text color="brand.primary" lineHeight="27.2px">
              We have a proven track record of successfully selling high-end
              properties at top prices and can provide our clients with
              unparalleled service and expertise throughout the buying or
              selling process.
            </Text>

            <Link href="/about">
              <Box
                display="flex"
                width="fit-content"
                alignItems="center"
                mt="19.2px"
                p="8px 8px 8px 0px"
              >
                <Text color="brand.primary" mr={{ base: "5px", lg: "16px" }}>
                  Reach out
                </Text>

                <Center
                  color="brand.primary"
                  boxSize="40px"
                  borderRadius="full"
                  border="1px solid"
                  borderColor="brand.primary"
                  _hover={{ bg: "brand.primary", color: "#FFFFFF" }}
                >
                  <GoArrowUpRight size="1.5rem" />
                </Center>
              </Box>
            </Link>
          </Box>
        </Box>

        <Box width={{ base: "100%", lg: "50%" }}>
          <Text
            color="brand.primary"
            fontSize={{ base: "48px", lg: "88px" }}
            fontFamily="CabinetGroteskRegular"
            lineHeight={{ base: "57px", lg: "105.6px" }}
            letterSpacing={{ base: "-1.6px", lg: "-2.4px" }}
          >
           United Kingdom based Realtor.
          </Text>
        </Box>
      </HStack>

      {/* <Box
        height={{ base: "235px", lg: "759px", "2xl": "930px" }}
        pt={{ base: "32px", lg: "64px" }}
      >
        <Image
          src="https://res.cloudinary.com/da6w53p43/image/upload/v1691583952/bedroom_jxd1vg.jpg"
          alt=""
          height="100%"
          width="100%"
        />
      </Box> */}
    </Box>
  );
}
