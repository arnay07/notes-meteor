import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Checkbox } from "@chakra-ui/react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import SubmitCancelButtons from "./SubmitCancelButtons";

const NoteForm = ({
  title,
  setTitle,
  body,
  setBody,
  isImportant,
  setIsImportant,
  handleNoteSubmit,
  submitLabel,
}) => {
  const navigate = useNavigate();

  const cancel = () => {
    navigate("/notes");
  };

  return (
    <Box marginTop={10}>
      <Box>
        <form onSubmit={handleNoteSubmit}>
          <FormInput
            id="title"
            label="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormTextArea
            id="body"
            label="Contenu"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <Checkbox
            id="isImportant"
            value={isImportant}
            isChecked={isImportant}
            onChange={(e) => setIsImportant(e.target.checked)}
          >
            Important
          </Checkbox>
          <SubmitCancelButtons submitLabel={submitLabel} onCancel={cancel} />
        </form>
      </Box>
    </Box>
  );
};

export default NoteForm;
