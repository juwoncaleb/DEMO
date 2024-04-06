import { Box, Center, HStack, Image, Text } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Listing() {
  return (
    <Box
      bg="#fffcf8"
      position="relative"
      zIndex={9}
      maxWidth="1520px"
      mx="auto"
      px={{ base: "1rem", lg: "4rem" }}
      py={{ base: "64px", lg: "128px" }}
    >
      <HStack
        spacing={0}
        gap="32px"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          width={{ base: "100%", lg: "50%" }}
          height={{ base: "229px", lg: "444px" }}
        >
          <Image
            src="https://res.cloudinary.com/da6w53p43/image/upload/v1691629792/64554b468be66e9cea048027_realtor-img8_hbcqah.jpg"
            height="100%"
            width="100%"
            alt="Listing"
            objectFit="cover"
          />
        </Box>

        <Box
          width={{ base: "100%", lg: "50%" }}
          height={{ lg: "444px" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box height="85%">
            <Image
              src="https://res.cloudinary.com/da6w53p43/image/upload/v1691565668/64550a65d9b591439c1edf3a_realtor-img9_yn6y1k.jpg"
              height={{ base: "229px", lg: "100%" }}
              width="100%"
              alt="Listing"
              objectFit="cover"
            />
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            mt="19px"
            alignItems="center"
          >
            <Box width={{ base: "60%", lg: "auto" }}>
              <Text
                color="brand.primary"
                display={{ base: "none", lg: "block" }}
              >
                Providing extensive experience and deep <br /> understanding of
                luxury real estate.
              </Text>
              <Text
                color="brand.primary"
                display={{ base: "block", lg: "none" }}
              >
                Providing extensive experience and deep understanding of luxury
                real estate.
              </Text>
            </Box>

            <Box width={{ base: "40%", lg: "auto" }}>
              <Link href="/listings">
                <Box display="flex" alignItems="center" p="6px">
                  <Text color="brand.primary" mr={{ base: "5px", lg: "16px" }}>
                    View listings
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
        </Box>
      </HStack>
    </Box>
  );
}
