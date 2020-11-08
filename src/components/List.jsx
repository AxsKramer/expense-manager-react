import React from 'react';
import Expense from './Expense';

const List = ({expenses}) => ( 
    <div className="text-center">
        <h2 className='text-white'>List of Expenses</h2>
        {
            expenses.map(expense => (
                <Expense key={expense.id} expense={expense} />
            ))
        }
    </div>
);
 
export default List;