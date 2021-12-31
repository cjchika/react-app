import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2019');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeYear={filterChangeHandler}
				/>
				<ExpensesList items={filteredExpense}/>
			</Card>
		</div>
	);
};

export default Expenses;
