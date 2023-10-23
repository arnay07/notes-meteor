import React from "react";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
import { useLoggedUser } from "meteor/quave:logged-user-react";
import { Meteor } from "meteor/meteor";

const Header = ({ user }) => {
  const { loggedUser, isLoadingUser } = useLoggedUser();

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Notes App</Heading>
        </Box>
        <Spacer />
        {loggedUser || isLoadingUser ? (
          <>
            <ButtonGroup gap="2">
              <Button
                as={Link}
                to={"/"}
                onClick={() => Meteor.logout()}
                colorScheme="teal"
              >
                Se déconnecter
              </Button>
            </ButtonGroup>
          </>
        ) : (
          <>
            <ButtonGroup gap="2">
              <Button as={Link} to={"/signup"} colorScheme="teal">
                S'inscrire
              </Button>
              <Button as={Link} to={"/login"} colorScheme="teal">
                Se connecter
              </Button>
            </ButtonGroup>
          </>
        )}
      </Flex>
      <Outlet />
    </>
  );
};

export default Header;
