import {useState } from "react";
import axios from "axios";
import './App.css';

function App() {
//store and update response from API,define default response when page loads 
  const [response,setResponse] = useState<string>("Hi there ! how can I assit you today?");
//store user input and update changes 
  const [value,setValue] = useState<string>("");
// Function to change user input values 
  const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>
    setValue(e.target.value); 
//Function to handle submit action to generate response from the server 
  const handleSubmit = async ()=> {
    const response = await axios.post("http://localhost:4005/chatbot",{
      question: value,
    });
    setResponse(response.data);
  }    

  return (
    <div className="container">
      
     <h1>React Chatbot</h1>

    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>

    <div>
      <button onClick={handleSubmit}>Click for answers!</button>
       </div>
    <div>
      <p>Chatbot: {response}</p>
    </div>

    </div>
  )
}

export default App
