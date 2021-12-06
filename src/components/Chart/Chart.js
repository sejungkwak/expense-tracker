import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
	const values = props.data.map((datum) => datum.amount);
	const maxValue = Math.max(...values);
	return (
		<div className='chart'>
			{props.data.map((datum) => (
				<ChartBar
					key={datum.month}
					value={datum.amount}
					maxValue={maxValue}
					month={datum.month}
				/>
			))}
		</div>
	);
};

export default Chart;
