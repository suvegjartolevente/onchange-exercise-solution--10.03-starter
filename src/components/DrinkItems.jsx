import { DrinkItem } from './DrinkItem';
import "./DrinkItems.css";

export const DrinkItems = ({ drinks, onClick }) => {
	return (
		<div className="DrinkItems">
			{drinks.map((drink) => (
				<DrinkItem  key={drink.id} drink={drink} onClick={onClick} />
			))}
		</div>
	);
};
