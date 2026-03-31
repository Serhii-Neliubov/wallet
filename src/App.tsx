import React, { useState } from 'react';
import { Transaction } from './types';
import TransactionsList from './components/TransactionsList';
import TransactionDetail from './components/TransactionDetail';
import transactions from './data/transactions.json';
import './App.css';

const CARD_BALANCE = parseFloat((Math.random() * 1500).toFixed(2));

const App: React.FC = () => {
  const [selected, setSelected] = useState<Transaction | null>(null);

  if (selected) {
    return <TransactionDetail tx={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <TransactionsList
      transactions={transactions as Transaction[]}
      onSelect={setSelected}
      cardBalance={CARD_BALANCE}
    />
  );
};

export default App;
