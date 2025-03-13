import { Button } from "@chakra-ui/react";

export const OrderConfirmed = ({ drink, onClick }) => {
  return (
    <>
      <h1>Your : {drink.name} is coming</h1>
      <img src={drink.imgUrl} width={300} height={300} alt={drink.alt} />
      <p>Your drink will be ready in a few minutes</p>
      <Button onClick={() => onClick()}>Change order</Button>
    </>
  );
};
