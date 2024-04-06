import React from "react";
import { Box, Center, HStack, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Benefits() {
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
        <Box width={{ base: "100%", lg: "42.6%" }}>
          <Box>
            <Text
              color="brand.primary"
              fontSize={{ base: "22.4px", lg: "64px" }}
              lineHeight={{ base: "33px", lg: "73.6px" }}
              letterSpacing={{ base: "-0.8px", lg: "-1.6px" }}
              fontFamily={{ lg: "CabinetGroteskRegular" }}
            >
              Why us
            </Text>
            <Text
              my="19.2px"
              color="brand.primary"
              fontSize="16px"
              lineHeight={{ base: "27px", lg: "27.2px" }}
            >
              Gain access to our extensive knowledge and experience in the
              high-end market, ensuring that you make informed decisions and
              navigate the complex process with confidence. Additionally, we
              have a personalized approach that guarantees that your unique
              needs and preferences are prioritized, resulting in a seamless and
              enjoyable real estate experience tailored to your specific
              requirements.
            </Text>
          </Box>

          <Link href="/listings">
            <Box display="flex" width="fit-content" alignItems="center">
              <Text color="brand.primary" mr={{ base: "5px", lg: "16px" }}>
                View our listings
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

        <Box width={{ base: "100%", lg: "57.4%" }}>
          <Box height={{ base: "331px", lg: "582px", "2xl": "724" }}>
            <Image
              src="https://res.cloudinary.com/da6w53p43/image/upload/v1691624967/64550a6592098008afcd522d_realtor-img1_i0rbe5.jpg"
              alt=""
              height="100%"
              width="100%"
              objectFit="cover"
              objectPosition="left"
            />
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
