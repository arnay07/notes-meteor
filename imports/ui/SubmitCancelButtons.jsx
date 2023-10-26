import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

const SubmitCancelButtons = ({ submitLabel, onCancel }) => (
  <Flex minWidth="max-content" alignItems="center" gap="2" marginTop={5}>
    <Box gap={2}>
      <Button colorScheme="teal" type="submit">
        {submitLabel}
      </Button>
    </Box>
    <Spacer />
    <Box gap={2}>
      <Button colorScheme="teal" onClick={onCancel}>
        Annuler
      </Button>
    </Box>
  </Flex>
);

export default SubmitCancelButtons;
