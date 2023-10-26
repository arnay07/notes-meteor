import React, { useState } from "react";
import NoteForm from "./NoteForm";
import { useNavigate, useParams } from "react-router-dom";
import { NotesCollection } from "../api/NotesCollection";
import { useTracker } from "meteor/react-meteor-data";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = useTracker(() => NotesCollection.findOne(id));

  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [isImportant, setIsImportant] = useState(note.isImportant);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!body && !title) return;

    NotesCollection.update(id, {
      $set: {
        title: title.trim(),
        body: body.trim(),
        isImportant: isImportant,
      },
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
      submitLabel={"Modifier"}
    />
  );
};

export default EditNote;
