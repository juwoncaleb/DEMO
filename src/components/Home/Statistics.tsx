import { Box, Center, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Statistics() {
  return (
    <Box
      maxWidth="1520px"
      mx="auto"
      px={{ base: "1rem", lg: "4rem" }}
      py={{ base: "64px", lg: "128px" }}
    >
      <HStack
        pb="64px"
        spacing={0}
        gap="80px"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <HStack
          spacing={0}
          flexDirection={{ base: "column", lg: "row" }}
          width={{ base: "100%", lg: "50%" }}
          gap={{ base: "16px", lg: "48px" }}
          alignItems="flex-start"
        >
          <Box width={{ base: "100%", lg: "50%" }}>
            <Text color="brand.primary" lineHeight={{ base: "", lg: "27px" }}>
              We are passionate about helping our clients find their dream home
              and achieve their real estate goals. We believe that everyone
              deserves to experience the luxury and exclusivity that high-end
              residential properties can offer.
            </Text>
          </Box>

          <Box width={{ base: "100%", lg: "50%" }}>
            <Text color="brand.primary" lineHeight={{ base: "", lg: "27px" }}>
              With over twenty years of experience selling luxury properties, we
              have developed a deep understanding of the luxury real estate
              market and the needs of high-end clientele.
            </Text>

            <Link href="/contact">
              <Box display="flex" mt="25px" alignItems="center">
                <Text color="brand.primary" mr={{ base: "5px", lg: "16px" }}>
                  About us
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
        </HStack>

        <Box width={{ base: "100%", lg: "50%" }}>
          <Text
            fontSize={{ base: "48px", lg: "88px" }}
            color="brand.primary"
            lineHeight={{ base: "57px", lg: "105.6px" }}
            letterSpacing={{ base: "-1.6px", lg: "-2.4px" }}
            fontFamily="CabinetGroteskRegular"
          >
            A Realtor that delivers.
          </Text>
        </Box>
      </HStack>

      <HStack
        spacing={0}
        gap={{ base: "40px", lg: "80px" }}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="flex-end"
      >
        <Box
          width={{ base: "100%", lg: "44%" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          py="15px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            borderBottom="1.4px solid"
            alignItems="flex-end"
            borderBottomColor="brand.primary"
            color="brand.primary"
            py="10px"
          >
            <Text
              fontSize={{ base: "96px", lg: "128px" }}
              fontFamily="CabinetGroteskRegular"
              lineHeight={{ base: "105px", lg: "140px" }}
            >
              375+
            </Text>
            <Text fontSize="16px">happy clients</Text>
          </Box>

          <Box
            color="brand.primary"
            display="flex"
            justifyContent="space-between"
            borderBottom="1.4px solid"
            alignItems="flex-end"
            borderBottomColor="brand.primary"
            py="10px"
          >
            <Text
              fontSize={{ base: "96px", lg: "128px" }}
              fontFamily="CabinetGroteskRegular"
              lineHeight={{ base: "105px", lg: "140px" }}
            >
              88
            </Text>
            <Text fontSize="16px">houses sold</Text>
          </Box>
        </Box>

        <Box
          width={{ base: "100%", lg: "76%" }}
          height={{ base: "216px", lg: "609px", "2xl": "630px" }}
        >
          <Image
            src="./donna.png"
            alt=""
           
            objectFit="cover"
          />
        </Box>
      </HStack>
    </Box>
  );
}
