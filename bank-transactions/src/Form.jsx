import React, { useState } from "react";
const baseURL = "http://localhost:8001";
const endPoint = baseURL + "/transactions";

function Form({ onUpdateTable }){
function Form({ onUpdateTable}){
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);         

  const formData = {
    date,
    description,
    category,
    amount
  }
  function handleSubmit(event){
    event.preventDefault();
    fetch(endPoint, {method: "POST",
    headers: {
     "Content-Type": "application/json",
     "Accept" : "application/json"
 }, 
     body: JSON.stringify(formData)
})    .then((response) => response.json())
      .then((data => console.log(data)));

    onUpdateTable(formData);

}                        


  return(
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input type="date" id="date" name="date" value={date} onChange={(event) => setDate(event.target.value)}/>
        <input type="text" id="description" name="description" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
        <input type="text" id="category" name="category" placeholder="Category" value={category} onChange={(event) => setCategory(event.target.value)}/> 
        <input type="number" id="amount" name="amount" placeholder="Amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
        <br />
        <input id="submitButton" type="submit" value="Add Transaction"/>
        <input className="formButton" type="submit" value="Add Transaction"/>
      </form>
    </div>
  );
}
}
export default Form