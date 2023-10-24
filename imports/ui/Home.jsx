import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex marginTop={5} alignItems={"center"} flexDirection={"column"} gap={4}>
      <Box>
        <Heading size="md">Bienvenue sur l'application de notes</Heading>
        <Text>Connectez-vous ou créez un compte pour commencer</Text>
      </Box>
    </Flex>
  );
};

export default Home;
