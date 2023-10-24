import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Note = ({ note }) => {
  return (
    <Box marginTop={5}>
      <Box>
        <Heading size="md">{note.title}</Heading>
      </Box>
      <Box>
        <Text>{note.body}</Text>
      </Box>
    </Box>
  );
};

export default Note;
