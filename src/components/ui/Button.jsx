

import { Button as AButton } from "@chakra-ui/react";

export const Button = ({  onClick, ...props }) => (
  <AButton colorScheme="teal" onClick={onClick} {...props}>{props.children}</AButton>
);
