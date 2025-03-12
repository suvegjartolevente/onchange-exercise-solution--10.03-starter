import { Button } from "@chakra-ui/react";

export const ModalButton = ({ text, onClick, colorScheme = "red" }) => {
  return (
    <Button colorScheme={colorScheme} onClick={onClick}>
      {text}
    </Button>
  );
};