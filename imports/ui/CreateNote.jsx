import React, { useState } from "react";
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

    Meteor.call(
      "notes.insert",
      {
        title: title.trim(),
        body: body.trim(),
        isImportant: isImportant,
      },
      (err) => {
        if (err) {
          console.log("error creating note: " + err);
        } else {
          console.log("successfully created note");
          navigate("/notes");
        }
      }
    );
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
