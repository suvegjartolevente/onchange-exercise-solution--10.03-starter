import { Button } from "@chakra-ui/react";

export const ModalButton = ({ text, onClick, colorScheme = "red", ...props }) => {
  return (
    <Button colorScheme={colorScheme} onClick={onClick} {...props}>
      {text}
    </Button>
  );
};