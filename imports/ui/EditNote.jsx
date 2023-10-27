import React, { useState } from "react";
import NoteForm from "./NoteForm";
import { useNavigate, useParams } from "react-router-dom";
import { NotesCollection } from "../api/NotesCollection";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const note = useTracker(() => NotesCollection.findOne(id));

  const [title, setTitle] = useState(note?.title || "");
  const [body, setBody] = useState(note?.body || "");
  const [isImportant, setIsImportant] = useState(note?.isImportant || false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!body && !title) return;

    Meteor.call(
      "notes.update",
      id,
      {
        title: title.trim(),
        body: body.trim(),
        isImportant: isImportant,
      },
      (err) => {
        if (err) {
          console.log("error updating note: " + err);
        } else {
          console.log("successfully updated note");
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
      submitLabel={"Modifier"}
    />
  );
};

export default EditNote;
