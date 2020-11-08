import React, { useState, useEffect } from 'react';
import Ask from '../components/Ask';
import BudgetExpense from '../components/BudgetExpense';
import Layout from '../components/Layout';

function App() {

  const [ budget, setBudget] = useState(0);
  const [ remaining, setRemainig] = useState('');
  const [ showAsk, setshowAsk ] = useState(true);
  const [ expenses, setExpenses] = useState([]);
  const [ expense, setExpense ] = useState({});
  const [ createExpense, setcreateExpense ] = useState(false);

  useEffect(() => {
    if(createExpense) {
        setExpenses([...expenses, expense]);
        const budgetRemaining = remaining - expense.amount;
        setRemainig(budgetRemaining);
        setcreateExpense(false);
    }
  }, [expense, createExpense, expenses, remaining]);


  return (
    <Layout>
        { showAsk 
        ?   <Ask 
        setBudget={setBudget} 
        setRemainig={setRemainig} 
        setshowAsk={setshowAsk} 
        /> 
        :   <BudgetExpense 
        setExpense={setExpense} 
        setcreateExpense={setcreateExpense} 
        expenses={expenses}
        budget={budget} 
        remaining={remaining}  
        />
    }
    </Layout>
  );
}

export default App;