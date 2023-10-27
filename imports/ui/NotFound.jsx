import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const NotFound = () => {
  return (
    <Box marginTop={10}>
      <Heading size={"md"}>Oups ! Cette page n'existe pas.</Heading>
    </Box>
  );
};
