import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	const [expenses, setExpenses] = useState([]);

	const addExpenseHandler = (NewExpenseData) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, NewExpenseData];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
};

export default App;
