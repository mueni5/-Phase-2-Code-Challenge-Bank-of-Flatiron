import React, {useState, useEffect} from 'react'
import './index.css'

function TransTable() {
    const [data, setData] = useState('');

    useEffect(() => {
     fetch('http://localhost:3000/transactions')
      .then(res => res.json())
      .then(data => setData(data.map( (transaction) => {
        //console.log(transaction)
        return (
            <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
            </tr>
        );
    })))}, [])

 //fillTable();
    
   
 return (
     <table>
          <thread>
              <tr>
                <th>Dates</th>
                <th>Description</th>
                <th>Categories</th>
                <th>Amount</th>
                
               </tr>
            </thread>
            <tbody>{data==='' ? <h2>loading</h2> : data}</tbody>
      </table>
      );
};
export default TransTable;