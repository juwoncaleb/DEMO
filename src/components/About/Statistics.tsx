import React from "react";
import { Box, Text, Image, Center } from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Statistics() {
  return (
    <Box
      maxWidth="1520px"
      mx="auto"
      px={{ base: "1rem", lg: "4rem" }}
      py={{ base: "64px", lg: "128px" }}
    >
      <Text
        color="brand.primary"
        fontSize={{ base: "22.4px", lg: "64px" }}
        lineHeight={{ base: "33px", lg: "73.6px" }}
        letterSpacing={{ base: "-0.8px", lg: "-1.6px" }}
        fontFamily={{ lg: "CabinetGroteskRegular" }}
      >
        The numbers don&apos;t lie
      </Text>

      <Box my="19.2px" maxWidth={{ md: "416px" }}>
        <Text
          color="brand.primary"
          fontSize="16px"
          lineHeight={{ base: "27px", lg: "27.2px" }}
        >
          For over 20 years we have been helping potential buyers find the home
          of their dreams.
        </Text>
      </Box>

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

      <Box
        display="flex"
        gap={{ base: "32px", lg: "80px" }}
        justifyContent="flex-end"
        mt={{ base: "32px", lg: "0px" }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box>
          <Text
            fontSize={{ base: "96px", lg: "128px" }}
            lineHeight={{ base: "105.6px", lg: "140.8px" }}
            fontFamily="CabinetGroteskRegular"
            color="brand.primary"
          >
            $100
          </Text>
          <Text
            fontSize="16px"
            lineHeight="27.2px"
            color="brand.primary"
            mt="16px"
            bg="#fffcf8"
            position="relative"
            zIndex={9}
          >
            million in houses sold last year
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ base: "96px", lg: "128px" }}
            lineHeight={{ base: "105.6px", lg: "140.8px" }}
            fontFamily="CabinetGroteskRegular"
            color="brand.primary"
          >
            20+
          </Text>
          <Text
            fontSize="16px"
            lineHeight="27.2px"
            color="brand.primary"
            mt="16px"
            bg="#fffcf8"
            position="relative"
            zIndex={9}
          >
            years of experience in Real Estate
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ base: "96px", lg: "128px" }}
            lineHeight={{ base: "105.6px", lg: "140.8px" }}
            fontFamily="CabinetGroteskRegular"
            color="brand.primary"
          >
            32
          </Text>
          <Text
            fontSize="16px"
            lineHeight="27.2px"
            color="brand.primary"
            mt="16px"
            bg="#fffcf8"
            position="relative"
            zIndex={9}
          >
            sold in the last 18 months alone
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
