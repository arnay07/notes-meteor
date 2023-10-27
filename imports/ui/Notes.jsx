import React from "react";
import { Box, Spacer } from "@chakra-ui/react";
import { useTracker } from "meteor/react-meteor-data";
import Note from "./Note";
import { NotesCollection } from "../api/NotesCollection";
import { Meteor } from "meteor/meteor";

const Notes = () => {
  const notes = useTracker(() => {
    const handler = Meteor.subscribe("notes");
    if (!handler.ready()) {
      return [];
    }
    return NotesCollection.find(
      { userId: Meteor.userId() },
      { sort: { createdAt: -1 } }
    ).fetch();
  });

  return notes.length === 0 ? (
    <Box marginTop={10}>
      <h1>Vous n'avez pas encore de notes</h1>
    </Box>
  ) : (
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
