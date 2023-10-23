import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const CreateNote = () => {
  return (
    <Box>
      <Heading>Create Note</Heading>
      <Box>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="content" isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="teal">Create Note</Button>
      </Box>
    </Box>
  );
};

export default CreateNote;
