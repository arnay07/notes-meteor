import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        console.log("error logging in: " + err);
        setError(err);
        setTimeout(() => setError(""), 3000);
      } else {
        console.log("successfully logged in");
        navigate("/");
      }
    });
  };

  return (
    <Box width="500px" margin="auto">
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.reason || "Erreur inconnue"}
        </Alert>
      )}
      <form onSubmit={login}>
        <FormControl isRequired>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Mot de passe</FormLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Se connecter
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
