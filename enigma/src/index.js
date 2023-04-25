import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>The Royal Bank of Flatiron</h1>
  </React.StrictMode>
);
 
var settings = {
    "url": "localhost:3000/transactions/1",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "date": "string",
      "description": "string",
      "category": "string",
      "amount": "number"
    }),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  var raw = "";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("localhost:3000/transactions", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));