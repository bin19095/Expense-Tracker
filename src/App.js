import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TransactionList} from "./components/TransactionList";
import './App.css';
import {IncomeExpense} from "./components/IncomeExpenses";
import {AddTransaction} from "./components/AddTransaction";

import { GlobalProvider } from './Context/GlobalProvider';

function App() {
  return (
      <GlobalProvider>
    <div className="App">
  <Header className="container" />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
      <div>

      </div>
    </div>
      </GlobalProvider>
  );
}

export default App;
