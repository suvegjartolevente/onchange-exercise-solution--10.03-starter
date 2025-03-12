import { useState } from 'react';
import './App.css';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';
import { Button, Heading, Modal } from '@chakra-ui/react';

export const App = () => {
	const [userDrink, setUserDrink] = useState();

	const greeting = 'Welcome to our cafe!';

	return (
		<div className="app">
			{userDrink ? (
				<DrinkChoice drink={userDrink} onClick={setUserDrink} />
				
				
			) : (
				<>
					<Heading mb={8} size="3xl"  color="blue.700">{greeting}</Heading>
					<DrinkSearch  onClick={setUserDrink} />
				</>
			)}
		</div>
	);
};
