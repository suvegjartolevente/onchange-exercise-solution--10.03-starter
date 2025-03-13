import { Button } from "@chakra-ui/react";

export const ModalButton = ({ text, onClick, colorScheme , ...props }) => {
  return (
    <Button colorScheme={"red"} onClick={onClick} {...props}>
      {text}
    </Button>
  );
};