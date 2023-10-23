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
import { Accounts } from "meteor/accounts-base";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ handleLogin }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    Accounts.createUser(
      {
        username: username,
        password: password,
      },
      (err) => {
        if (err) {
          console.log("error creating user: " + err);
          setError(err);
          setTimeout(() => setError(""), 3000);
        } else {
          console.log("successfully created user");
          navigate("/");
        }
      }
    );
  };

  return (
    <Box width="500px" margin="auto">
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.reason || "Erreur inconnue"}
        </Alert>
      )}
      <form onSubmit={signup}>
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
          S'inscrire
        </Button>
      </form>
    </Box>
  );
};

export default SignupForm;
