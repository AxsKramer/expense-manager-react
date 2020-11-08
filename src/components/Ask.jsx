import React, { Fragment, useState } from 'react';
import Error from './Error';

const Ask = ({ setBudget, setRemainig, setshowAsk }) => {

    const [ amount, setAmount ] = useState(0);
    const [ error, setError] = useState(false);

    const defineBudget = e => {
        setAmount( parseInt(e.target.value, 10) );
    }
    
    const addBudget = e => {
        e.preventDefault();
        if(amount < 1 || isNaN( amount ) ) {
            setError(true);
            return;
        }
        setError(false);
        setBudget(amount);
        setRemainig(amount);
        setshowAsk(false);
    }

    return ( 
        <div className="col-4 offset-4 align-self-center">
            <h5 className='text-white text-center'>Enter your budget here</h5>
            { error ? <Error message="The budget is wrong..." />  : null }
            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Enter your budget for example: 500"
                    onChange={defineBudget}
                    />
                <input 
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Send Budget"
                    />
            </form>
        </div>
     );
}
 
export default Ask;