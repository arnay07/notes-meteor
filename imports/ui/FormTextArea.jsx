import React from "react";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const FormTextArea = ({ id, label, value, onChange, placeholder }) => (
  <FormControl id={id} isRequired>
    <FormLabel>{label}</FormLabel>
    <Textarea placeholder={placeholder} value={value} onChange={onChange} />
  </FormControl>
);

export default FormTextArea;
