import React, { useState } from "react";
import { NotesCollection } from "../api/NotesCollection";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import NoteForm from "./NoteForm";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const navigate = useNavigate();

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
