import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Checkbox,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { NotesCollection } from "../api/NotesCollection";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!body & !title) return;

    NotesCollection.insert({
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date(),
      isImportant: isImportant,
    });

    navigate("/notes");
  };

  const cancel = () => {
    navigate("/notes");
  };

  return (
    <Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl id="title" isRequired>
            <FormLabel>Titre</FormLabel>
            <Input
              type="text"
              placeholder="Entrez le titre de votre note"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl id="body" isRequired>
            <FormLabel>Contenu</FormLabel>
            <Textarea
              placeholder="Entrez le contenu de votre note"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </FormControl>
          <Checkbox
            value={isImportant}
            onChange={(e) => setIsImportant(e.target.checked)}
          >
            Important
          </Checkbox>
          <br />
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box gap={2}>
              <Button colorScheme="teal" type="submit">
                Créer une note
              </Button>
            </Box>
            <Spacer />
            <Box gap={2}>
              <Button colorScheme="teal" onClick={cancel}>
                Annuler
              </Button>
            </Box>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default CreateNote;
