import React, { useEffect } from "react";
import { Box, Spacer } from "@chakra-ui/react";
import { useTracker } from "meteor/react-meteor-data";
import { NotesCollection } from "../api/NotesCollection";
import Note from "./Note";
import { Meteor } from "meteor/meteor";
import { useNavigate } from "react-router-dom";
import { useLoggedUser } from "meteor/quave:logged-user-react";

const Notes = () => {
  const notes = useTracker(() => {
    return NotesCollection.find(
      { userId: Meteor.userId() },
      { sort: { createdAt: -1 } }
    ).fetch();
  });

  const navigate = useNavigate();

  const { loggedUser, isLoadingUser } = useLoggedUser();

  useEffect(() => {
    if (!loggedUser && !isLoadingUser) {
      navigate("/");
      return null;
    }
  }, [loggedUser, isLoadingUser]);

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
