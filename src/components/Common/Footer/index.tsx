import React from "react";
import { Box, Image, Text, HStack } from "@chakra-ui/react";
import Subscribe from "./Subscribe";
import { footerLinks } from "@/lib/data/navRoutes";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      maxWidth="1520px"
      mx="auto"
      px={{ base: "1rem", lg: "4rem" }}
      pt="64px"
      pb="32px"
    >
      <Box>
        <Link href="">
        
        </Link>
      </Box>

      <HStack
        spacing={0}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", lg: "center" }}
        mt="3rem"
        gap="32px"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Subscribe />

        <Box width="100%" maxWidth={{ lg: "320px" }}>
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            rowGap="32px"
            columnGap={{ lg: "80px" }}
          >
            {footerLinks.map((item) => {
              return (
                <Box key={item.label}>
                  <Link href={item.route}>
                    <Text
                      color="brand.primary"
                      fontFamily="CabinetGroteskRegular"
                    >
                      {item.label}
                    </Text>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Box>
      </HStack>

      <HStack
        spacing={0}
        justifyContent="space-between"
        mt="3rem"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Text color="brand.primary">© 2023 Nextmove.</Text>

        <HStack
          spacing={0}
          justifyContent="space-between"
          gap="1rem"
          mt={{ base: "16px", lg: "0px" }}
        >
          <Link href="">
            <Text color="brand.primary" fontFamily="CabinetGroteskRegular">
              Instagram
            </Text>
          </Link>
          <Link href="">
            <Text color="brand.primary" fontFamily="CabinetGroteskRegular">
              LinkedIn
            </Text>
          </Link>
          <Link href="">
            <Text color="brand.primary" fontFamily="CabinetGroteskRegular">
              Facebook
            </Text>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
}
