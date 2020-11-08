import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';

const Form = ({setExpense, setcreateExpense, remaining}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    const addExpenseSubmit = e => {
        e.preventDefault();
        if(amount < 1 || isNaN( amount) || name.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        const expense = { name, amount, id: shortid.generate() }
        setExpense(expense);
        setcreateExpense(true);
        // reset form
        setName('');
        setAmount(0);
    }

    return ( 
        <form onSubmit={addExpenseSubmit} >
            <h2 className='text-white text-center'>Add your expenses here</h2>
            { error ? <Error message="Both fields are required" /> : null }
            <div className="form-group">
                <label className='text-white'>Expense's Name:</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="for example: food or university"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className='text-white'>Amount of expenses:</label>
                <input 
                    type="number"
                    className="form-control"
                    placeholder="for example: 300"
                    onChange={e => setAmount( parseInt( e.target.value, 10 ) )}
                    value={amount}
                />
            </div>
            <input type="submit" className="btn btn-info btn-block" value="Add Expense" disabled={remaining <= 0 ? true: false} />
        </form>
     );
}
 
export default Form;