import React, { useEffect, useState } from "react";
import { NotesCollection } from "../api/NotesCollection";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import NoteForm from "./NoteForm";
import { useLoggedUser } from "meteor/quave:logged-user-react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const navigate = useNavigate();

  const { loggedUser, isLoadingUser } = useLoggedUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!body && !title) return;

    NotesCollection.insert({
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date(),
      isImportant: isImportant,
      userId: Meteor.userId(),
    });

    navigate("/notes");
  };

  useEffect(() => {
    if (!loggedUser && !isLoadingUser) {
      navigate("/");
      return null;
    }
  }, [loggedUser, isLoadingUser]);

  return (
    <NoteForm
      handleNoteSubmit={handleSubmit}
      title={title}
      setTitle={setTitle}
      body={body}
      setBody={setBody}
      isImportant={isImportant}
      setIsImportant={setIsImportant}
      submitLabel={"Créer"}
    />
  );
};

export default CreateNote;
