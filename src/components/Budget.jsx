import React, { Fragment} from 'react';
import { checkBudget } from '../helpers';

const Budget = ({budget, remaining}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                <p className={`text-primary p-0 m-0`}>Budget: $ {budget}</p> 
            </div>
            <div className={checkBudget(budget, remaining)}>
                <p className={`text-${checkBudget(budget, remaining)} p-0 m-0`}>Remaining: $ {remaining}</p> 
            </div>
        </Fragment>

     );
}
 
export default Budget;