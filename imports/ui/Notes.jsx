import React from "react";
import { Box, Heading, Spacer, Flex, Button} from "@chakra-ui/react";
import { useTracker } from "meteor/react-meteor-data";
import { NotesCollection } from "../api/NotesCollection";
import Note from "./Note";

const Notes = () => {
    const notes = useTracker(() => {
        return NotesCollection.find({}, { sort: { createdAt: -1 } }).fetch();
    });

    const deleteNote = (noteId) => {
        NotesCollection.remove(noteId);
    };

    const toggleImportance = (note) => {
        const newImportance = !note.isImportant;
        NotesCollection.update(note._id, { $set: { isImportant: newImportance } });
    };

    return (
        <Flex flexDirection={"column"} gap={4} alignItems={"center"}>
            <Box gap={4}>
                <Heading size="md">Mes notes</Heading>
            </Box>
            <Box gap={4}>
                {notes.map((note) => (
                    <div key={note._id}>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Note key={note._id} note={note} />
                            <Box>
                                <Button
                                    colorScheme="teal"
                                    size="sm"
                                    onClick={() => deleteNote(note._id)}
                                >
                                    Supprimer
                                </Button>
                                <Button
                                    colorScheme="teal"
                                    size="sm"
                                    onClick={() => toggleImportance(note)}
                                >
                                    {note.isImportant ? "Important" : " Pas important"}
                                </Button>
                            </Box>
                        </Flex>
                        <Spacer />
                    </div>
                ))}
            </Box>
        </Flex>
    );
};
export default Notes;
