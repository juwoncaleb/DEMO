import React from "react";
import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

import { servicesList } from "@/lib/data/services";

export default function Hero() {
  return (
    <Box maxWidth="1520px" mx="auto" px={{ base: "1rem", lg: "4rem" }}>
      <Box pt={{ base: "160px", lg: "192px" }} pb="96px">
        <Text
          color="brand.primary"
          fontSize={{ base: "48px", lg: "88px" }}
          fontFamily="CabinetGroteskRegular"
          lineHeight={{ base: "57px", lg: "105.6px" }}
          letterSpacing={{ base: "-1.6px", lg: "-2.4px" }}
          maxWidth="900px"
        >
          Unparalleled Expertise, Personalized Solutions.
        </Text>

        <Text
          mt="20px"
          color="brand.primary"
          fontSize="16px"
          lineHeight={{ base: "27px", lg: "27px" }}
          maxWidth="510px"
          bg="#fffcf8"
          position="relative"
          zIndex={9}
        >
          We understand that luxury real estate demands exceptional expertise
          and a tailored approach, which is why we go above and beyond to
          deliver unparalleled service and personalized solutions that align
          perfectly with your distinct preferences and goals.
        </Text>
      </Box>

      <Box
        py="48px"
        display="grid"
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
        }}
        gap="16px"
      >
        {servicesList.map((item) => (
          <VStack
            height={{ md: "271px" }}
            alignItems="flex-start"
            justifyContent="space-between"
            key={item.title}
            pr={{ md: "10px" }}
          >
            <Box>
              <Text
                color="brand.primary"
                fontSize={{ base: "20px", lg: "32px" }}
                lineHeight={{ base: "29px", lg: "44px" }}
              >
                {item.title}
              </Text>
              <Text
                mt="19px"
                color="brand.primary"
                fontSize="16px"
                lineHeight={{ base: "27px", lg: "27px" }}
              >
                {item.description}
              </Text>
            </Box>

            <Link href="/listings">
              <Box display="flex" alignItems="center" p="6px">
                <Text color="brand.primary" mr={{ base: "5px", lg: "16px" }}>
                  {item.link_text}
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
          </VStack>
        ))}
      </Box>
    </Box>
  );
}
