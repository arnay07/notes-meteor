import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      marginTop={100}
      alignItems={"center"}
      flexDirection={"column"}
      gap={4}
    >
      <Heading size="md">Bienvenue sur l'application de notes</Heading>
    </Flex>
  );
};

export default Home;
