import { useState } from "react";
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
  const [isConfirmed, setIsConfirmed] = useState(false); // ✅ Track confirmation

  const handleConfirm = () => {
    setIsConfirmed(true); // ✅ Set state to show OrderConfirmed
    onClose(); // ✅ Close the modal after confirming
  };

  return (
    <div>
      {/* ✅ Show OrderConfirmed if approved, otherwise show selection */}
      {isConfirmed ? (
        <OrderConfirmed drink={drink} onClick={onClick} />
      ) : (
        <>
          <h2>Your choice: {drink.name}</h2>
          <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
          <p>Your drink will be ready in a few minutes</p>
          <Button onClick={() => onClick()}>Change order</Button>

          <Button onClick={onOpen} variant="ghost">
            Confirm
          </Button>

          
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirm Your Order</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Please validate your choice</Text>
              </ModalBody>

              <ModalFooter>
                <ModalButton text={"Cancel"} colorScheme="red" mr={3} onClick={onClose}>
                  Close
                </ModalButton>
                <ModalButton text={"Approve"} onClick={handleConfirm}>
                  Approve
                </ModalButton>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  );
};
