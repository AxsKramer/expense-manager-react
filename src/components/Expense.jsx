import React from 'react';

const Expense = ({expense}) => ( 
    <li className="bg-white m-0 rounded text-start d-flex justify-content-around mb-2">
        <p className="font-weight-bold d-inline-block m-0" >
            {expense.name}:
        </p>
        <span className='font-weight-normal '> $ {expense.amount} </span>
    </li>
);

export default Expense;