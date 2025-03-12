import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";
import { ModalButton } from "./ui/ModalButton";

export const DrinkChoice = ({ drink, onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <h2>Your choice: {drink.name}</h2>
      <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
      <p>Your drink will be ready in a few minutes</p>
      <Button text={"Change selection"} onClick={() => onClick()} />
      <ModalButton  onClick={onOpen}>Open Modal</ModalButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text count={2} />{" "}
          </ModalBody>

          <ModalFooter>
            <ModalButton
              color="red"
              variantColor="red"
              mr={3}
              onClick={onClose}
            >
              Close
            </ModalButton>
            <ModalButton variant="ghost">Secondary Action</ModalButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
