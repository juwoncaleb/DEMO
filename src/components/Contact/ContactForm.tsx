import React from "react";
import {
  Box,
  Input,
  Button,
  Textarea,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <Box pt={{ lg: "96px" }}>
      <FormControl>
        <FormLabel
          mt="16px"
          fontFamily="CabinetGroteskExtrabold"
          color="brand.primary"
          //   fontWeight={600}
        >
          Name
        </FormLabel>
        <Input
          fontSize="14px"
          color="brand.primary"
          _placeholder={{ color: "brand.primary" }}
          variant="flushed"
          padding="11.2px 16px 11.2px 0px"
          _focus={{ outline: "2px" }}
          borderBottom="1px solid"
          focusBorderColor="brand.primary"
          borderBottomColor="brand.primary"
        />
      </FormControl>
      <FormControl>
        <FormLabel
          mt="16px"
          fontFamily="CabinetGroteskExtrabold"
          color="brand.primary"
        >
          Email Address
        </FormLabel>
        <Input
          fontSize="14px"
          color="brand.primary"
          _placeholder={{ color: "brand.primary" }}
          variant="flushed"
          padding="11.2px 16px 11.2px 0px"
          _focus={{ outline: "2px" }}
          borderBottom="1px solid"
          focusBorderColor="brand.primary"
          borderBottomColor="brand.primary"
        />
      </FormControl>
      <FormControl>
        <FormLabel
          mt="16px"
          fontFamily="CabinetGroteskExtrabold"
          color="brand.primary"
        >
          Phone Number
        </FormLabel>
        <Input
          fontSize="14px"
          color="brand.primary"
          _placeholder={{ color: "brand.primary" }}
          variant="flushed"
          padding="11.2px 16px 11.2px 0px"
          _focus={{ outline: "2px" }}
          borderBottom="1px solid"
          focusBorderColor="brand.primary"
          borderBottomColor="brand.primary"
        />
      </FormControl>
      <FormControl>
        <FormLabel
          mt="16px"
          fontFamily="CabinetGroteskExtrabold"
          color="brand.primary"
        >
          Message
        </FormLabel>
        <Textarea
          fontSize="14px"
          color="brand.primary"
          _placeholder={{ color: "brand.primary" }}
          variant="flushed"
          padding="11.2px 16px 11.2px 0px"
          _focus={{ outline: "2px" }}
          borderBottom="1px solid"
          focusBorderColor="brand.primary"
          borderBottomColor="brand.primary"
        />
      </FormControl>

      <Box mt="35px">
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
  );
}
