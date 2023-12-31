import React from "react";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Note = ({ note }) => {
  const deleteNote = (noteId) => {
    Meteor.call("notes.remove", noteId, (err) => {
      if (err) {
        console.log("error deleting note: " + err);
      } else {
        console.log("successfully deleted note");
      }
    });
  };

  const navigate = useNavigate();

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p={2}>
        <Flex gap={2}>
          <Heading size="md">{note.title}</Heading>
          <Spacer />
          {note.isImportant && <Badge colorScheme="red">Important</Badge>}
        </Flex>
        <Box>
          <Text>{note.body}</Text>
        </Box>
      </Box>
      <Spacer />
      <ButtonGroup gap={2}>
        <Button
          colorScheme="red"
          size="sm"
          onClick={() => deleteNote(note._id)}
        >
          Supprimer
        </Button>
        <Button
          colorScheme="teal"
          size="sm"
          onClick={() => navigate(`/edit/${note._id}`)}
        >
          Modifier
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Note;
