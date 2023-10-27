import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLoggedUser } from "meteor/quave:logged-user-react";
import { Meteor } from "meteor/meteor";

const Header = () => {
  const { loggedUser, isLoadingUser } = useLoggedUser();
  const navigate = useNavigate();

  const logout = () => {
    Meteor.logout();
    navigate("/");
  };

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading>Notes App</Heading>
        </Box>
        <Spacer />
        {loggedUser || isLoadingUser ? (
          <>
            <ButtonGroup gap="2">
              <Button onClick={() => navigate("/create")} colorScheme="teal">
                Créer une note
              </Button>
              <Button onClick={logout} colorScheme="teal">
                Se déconnecter
              </Button>
            </ButtonGroup>
          </>
        ) : (
          <>
            <ButtonGroup gap="2">
              <Button onClick={() => navigate("/signup")} colorScheme="teal">
                S'inscrire
              </Button>
              <Button onClick={() => navigate("/login")} colorScheme="teal">
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
