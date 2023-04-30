import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Form from "./Form";
import Transactions from "./Transactions";

const endPoint = 'http://localhost:8001/transactions';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(endPoint, {method: "GET"})
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  return (
    <div className="App">
      <SearchBar placeholder={"Search your Recent Transactions"} />
      <Form />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
