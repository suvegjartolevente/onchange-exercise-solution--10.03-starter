import { Button, Image, Text } from "@chakra-ui/react";
import "./DrinkItem.css";

export const DrinkItem = ({ drink, onClick }) => {
  return (
    <Button
      mt={4}
      mb={4}
      bg="#d7c179"
      _focus={{
        bg: "#6e5c21",
      }}
      _hover={{
        bg: "#e4d5a5",
        boxShadow: "5px 6px 5px 2px rgba(0,0,0,0.67);",
      }}
      onClick={() => onClick(drink)}
    >
      <Image src={drink.imgUrl} width={50} height={50} alt={drink.alt} rounded={20} />
      <Text>{drink.name}</Text>
    </Button>
  );
};
