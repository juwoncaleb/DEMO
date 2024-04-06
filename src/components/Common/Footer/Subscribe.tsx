import { Box, Text, Input, Button } from "@chakra-ui/react";

export default function Subscribe() {
  return (
    <Box maxWidth="320px">
      <Text color="brand.primary" lineHeight="27px">
        Stay up-to-date on my latest listings and market trends.
      </Text>

      <Box display="flex" alignItems="center" gap="10px" mt="20px">
        <Input
          fontSize="14px"
          placeholder="Enter your email"
          color="brand.primary"
          _placeholder={{ color: "brand.primary" }}
          variant="flushed"
          _focus={{ borderBottom: "1.5px" }}
          borderBottom="1px solid"
          focusBorderColor="brand.primary"
          borderBottomColor="brand.primary"
        />

        <Box>
          <Button
            boxSize="96px"
            variant="outline"
            borderRadius="full"
            color="rgb(29, 88, 74)"
            fontFamily="CabinetGroteskRegular"
            borderColor="brand.primary"
            _hover={{ bg: "brand.primary", color: "text.light" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
