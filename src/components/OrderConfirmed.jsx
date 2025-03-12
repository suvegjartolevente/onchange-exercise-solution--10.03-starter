import { DrinkItem } from "./DrinkItem";


export const OrderConfirmed= ({ drink, onClick}) => {
  
  return (
    <>
    <DrinkItem  key={drink.id} drink={drink} onClick={onClick} />
    </>
	);
};
