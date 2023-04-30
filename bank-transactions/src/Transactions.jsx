import React, { useState, useEffect } from 'react';
import { Table, Form } from 'react-bootstrap';
import SearchBar from './SearchBar';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8001/transactions').then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      description,
      amount: Number(amount),
    };
    axios.post('http://localhost:8001/transactions', newTransaction).then((response) => {
      setTransactions([...transactions, response.data]);
      setDescription('');
      setAmount('');
    });
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
     .then(res => res.json())
     .then(data => setTransactions(data))}, [])
 
   return (
     <table className="table-display">
      <thead>
      <tr>
         <th>Date</th>
         <th>Description</th>
         <th>Category</th>
         <th>Amount</th>
       </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Transactions;
