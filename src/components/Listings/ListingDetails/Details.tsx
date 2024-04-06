import { Box, Center, HStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Details({ currentListing }: any) {
  return (
    <Box padding={{ base: "16px 0px 96px", lg: "64px 0px 96px" }}>
      <Box maxWidth="1520px" mx="auto" px={{ base: "1rem", lg: "4rem" }}>
        <HStack
          spacing={0}
          alignItems="flex-start"
          gap={{ base: "", lg: "80px" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box width={{ base: "100%", lg: "50%" }}>
            <Text
              color="brand.primary"
              fontSize={{ base: "48px", lg: "88px" }}
              fontFamily="CabinetGroteskRegular"
              lineHeight={{ base: "57.6px", lg: "105.6px" }}
              letterSpacing={{ base: "-1.6px", lg: "-2.4px" }}
            >
              {currentListing?.name}
            </Text>

            <Text
              mt="19.2px"
              color="brand.primary"
              fontSize={{ base: "20.8px", lg: "32px" }}
              fontFamily="CabinetGroteskRegular"
              lineHeight={{ base: "29.12px", lg: "44.8px" }}
            >
              {currentListing?.price}
            </Text>

            <Box
              color="brand.primary"
              mt={{ base: "20px", lg: "35px" }}
              maxWidth="270px"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid"
                borderBottomColor="brand.primary"
                py="9px"
                color="brand.primary"
              >
                <Text fontSize="20px" fontFamily="CabinetGroteskRegular">
                  {currentListing?.bedrooms}
                </Text>
                <Text fontSize="16px">bedrooms</Text>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid"
                borderBottomColor="brand.primary"
                py="9px"
              >
                <Text fontSize="20px" fontFamily="CabinetGroteskRegular">
                  {currentListing?.bathrooms}
                </Text>
                <Text fontSize="16px">bathrooms</Text>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid"
                borderBottomColor="brand.primary"
                py="9px"
              >
                <Text fontSize="20px" fontFamily="CabinetGroteskRegular">
                  {currentListing?.square_ft}
                </Text>
                <Text fontSize="16px">sq ft</Text>
              </Box>
            </Box>

            <Box mt="35px">
              <Box
                display="flex"
                flexDir="column"
                alignItems="flex-end"
                gap={{ base: "35px", lg: "19.2px" }}
              >
                <Link href="/contact">
                  <Box display="flex" alignItems="center">
                    <Text color="brand.primary" mr="16px">
                      Inquire today
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

                <Text
                  lineHeight={{ lg: "27px" }}
                  fontSize="16px"
                  color="brand.primary"
                  maxWidth="416px"
                >
                  This luxurious $4.495 million property in Cherry Creek,
                  Colorado boasts 6 spacious bedrooms, 4 elegantly designed
                  bathrooms, and breathtaking panoramic views. It also includes
                  a pool, and a movie theatre.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            width={{ base: "100%", lg: "50%" }}
            mt={{ base: "2rem", lg: "0rem" }}
          >
            {currentListing?.preview_images.map(
              (item: string, index: number) => (
                <Box
                  height={{ base: "229px", lg: "358px" }}
                  mb="32px"
                  key={index}
                >
                  <Image
                    src={item}
                    alt={currentListing.name}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </Box>
              )
            )}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
