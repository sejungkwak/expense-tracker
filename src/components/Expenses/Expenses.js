import { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const currentYear = new Date().getFullYear();
	const [filteredYear, setFilteredYear] = useState(currentYear);
	const showFilteredYearExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear() === +filteredYear
	);
	const selectYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selectedYear={filteredYear}
				onSelectYear={selectYearHandler}
			/>
			<ExpensesChart expenseData={showFilteredYearExpenses} />
			<ExpensesList filteredExpenses={showFilteredYearExpenses} />
		</Card>
	);
};

export default Expenses;
