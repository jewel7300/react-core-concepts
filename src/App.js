import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person={name:"Dr.Mahfuz", age:"46", job:"Singer"}
  let person2={name:"Eva Rahman", job:"singer", age:"45"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
        <p>My First React Paragraph</p>
  <h2>My Heading: {person.name+" "+person.job+" "+person.age}</h2>
  <h3>Heading Second: {person2.name}</h3>
    
      </header>
    </div>
  );
}

export default App;
