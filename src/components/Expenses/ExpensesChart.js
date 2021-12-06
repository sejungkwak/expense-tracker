import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
	const data = [
		{ month: 'Jan', amount: 0 },
		{ month: 'Feb', amount: 0 },
		{ month: 'Mar', amount: 0 },
		{ month: 'Apr', amount: 0 },
		{ month: 'May', amount: 0 },
		{ month: 'Jun', amount: 0 },
		{ month: 'Jul', amount: 0 },
		{ month: 'Aug', amount: 0 },
		{ month: 'Sep', amount: 0 },
		{ month: 'Oct', amount: 0 },
		{ month: 'Nov', amount: 0 },
		{ month: 'Dec', amount: 0 },
	];

	for (const expense of props.expenseData) {
		const expenseMonth = expense.date.getMonth();
		data[expenseMonth].amount += expense.amount;
	}

	return <Chart data={data} />;
};

export default ExpensesChart;
