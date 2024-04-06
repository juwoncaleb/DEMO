import { Box, HStack, Text, Center } from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Overview() {
  // useEffect(() => {
  //   AOS.init({ once: true });
  //   AOS.refresh();
  // }, []);

  return (
    <Box py="4rem">
      <Box maxWidth="1520px" mx="auto" px={{ base: "1rem", lg: "4rem" }}>
        <HStack
          spacing={0}
          gap={{ base: "40px", lg: "80px" }}
          flexDirection={{ base: "column", lg: "row" }}
          height={{ lg: "560px" }}
        >
          <Box width={{ base: "100%", lg: "50%" }}>
            <Text
              fontSize={{ base: "48px", lg: "88px" }}
              color="brand.primary"
              letterSpacing={{ base: "-1.6px", lg: "-2.4px" }}
              fontFamily="CabinetGroteskRegular"
              lineHeight={{ base: "57px", lg: "105px" }}
              mb="1.3rem"
            >
              For those that want a home that impresses.
            </Text>

            <Link href="/contact">
              <Box display="flex" alignItems="center" p="6px">
                <Text color="brand.primary" mr="16px">
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

          <Box
            width={{ base: "100%", lg: "50%" }}
            display="flex"
            flexDirection="column"
            height={{ lg: "100%" }}
            alignItems={{ base: "flex-end" }}
            justifyContent={{ base: "flex-end" }}
          >
            <Box display="flex" justifyContent="flex-end" mb="35px">
              <Box maxWidth="320px">
                <Text color="brand.primary" lineHeight="27px">
                  We specialize in selling high-end luxury residential
                  properties all across beautiful LA.
                </Text>
              </Box>
            </Box>

            <HStack
              color="brand.primary"
              spacing={0}
              width="100%"
              flexDirection={{ base: "column", lg: "row" }}
              alignItems={{ base: "flex-end", lg: "flex-start" }}
              justifyContent="space-between"
              pb="1rem"
              gap={{ base: "32px", lg: "80px" }}
            >
              <Box width={{ base: "232px", lg: "fit-content" }}>
                <Text
                  fontSize={{ base: "96px", lg: "128px" }}
                  fontFamily="CabinetGroteskRegular"
                  lineHeight={{ base: "105.6px", lg: "140px" }}
                >
                  $100
                </Text>
                <Text color="brand.primary" lineHeight="27.2px">
                  million in houses sold last year
                </Text>
              </Box>

              <Box width={{ base: "232px", lg: "fit-content" }}>
                <Text
                  fontSize={{ base: "96px", lg: "128px" }}
                  fontFamily="CabinetGroteskRegular"
                  textAlign={{ lg: "right" }}
                  lineHeight={{ base: "105.6px", lg: "140px" }}
                >
                  20+
                </Text>
                <Text color="brand.primary" lineHeight="27.2px">
                  years of experience in Real Estate
                </Text>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
