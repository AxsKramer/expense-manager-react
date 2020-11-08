import React, { Fragment } from 'react';
import Form from './Form';
import List from './List';
import Budget from './Budget';

const BudgetExpense = ({setExpense, setcreateExpense, expenses, budget, remaining }) => (
    <Fragment >
        <div className="col-6">
            <Form setExpense={setExpense} setcreateExpense={setcreateExpense} remaining={remaining} />
        </div>
        <div className="col-6">
            <Budget budget={budget} remaining={remaining} />
            <List expenses={expenses} />
        </div>
    </Fragment>
);

 
export default BudgetExpense;