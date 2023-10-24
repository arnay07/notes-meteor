import React from "react";
import { Box, Heading, Spacer, Flex } from "@chakra-ui/react";
import { useTracker } from "meteor/react-meteor-data";
import { NotesCollection } from "../api/NotesCollection";
import Note from "./Note";

const Notes = () => {
  const notes = useTracker(() => {
    return NotesCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  });

  return (
    <Flex flexDirection={"column"} gap={4} alignItems={"center"}>
      <Box gap={4}>
        <Heading size="md">Mes notes</Heading>
      </Box>
      <Box gap={4}>
        {notes.map((note) => (
          <div key={note._id}>
            <Note key={note._id} note={note} />
            <Spacer />
          </div>
        ))}
      </Box>
    </Flex>
  );
};
export default Notes;
