import React from "react";
import { Box, Spacer } from "@chakra-ui/react";
import { useTracker } from "meteor/react-meteor-data";
import { NotesCollection } from "../api/NotesCollection";
import Note from "./Note";
import { Meteor } from "meteor/meteor";

const Notes = () => {
  const notes = useTracker(() => {
    return NotesCollection.find(
      { userId: Meteor.userId() },
      { sort: { createdAt: -1 } }
    ).fetch();
  });

  return (
    <Box marginTop={10}>
      {notes.map((note) => (
        <div key={note._id}>
          <Note key={note._id} note={note} />
          <Spacer />
        </div>
      ))}
    </Box>
  );
};
export default Notes;
