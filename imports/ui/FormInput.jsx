import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormInput = ({ id, label, type, value, onChange, placeholder }) => (
  <FormControl id={id} isRequired>
    <FormLabel>{label}</FormLabel>
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </FormControl>
);

export default FormInput;
