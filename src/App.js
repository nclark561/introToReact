import React, { useState } from 'react';
import Child from "./components/Child.jsx";
import "./App.css";

function App() {
const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>App Component</h1>
      <h3>User Input: { input }</h3>
      <input 
      placeholder="Type Something Cool"
      onChange={e => setInput(e.target.value)}/>
      <Child userInput={ input }></Child>
    </div>
  );
}

export default App;
