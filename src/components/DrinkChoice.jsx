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
import { OrderConfirmed } from "./OrderConfirmed";

export const DrinkChoice = ({ drink, onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <h2>Your choice: {drink.name}</h2>
      <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
      <p>Your drink will be ready in a few minutes</p>
      <Button onClick={() => onClick()}> Change order</Button>

      <Button onClick={onOpen} variant="ghost">
        Confirm
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text count={2} />
            {"Please validate your choice"}
          </ModalBody>

          <ModalFooter>
            <ModalButton
              text={"Cancel"}
              variantColor="red"
              mr={3}
              onClick={onClose}
            >
              Close
            </ModalButton>
            <ModalButton text={"Approve"} onClick={OrderConfirmed}>
				<OrderConfirmed/>
			</ModalButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
