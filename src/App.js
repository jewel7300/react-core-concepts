import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    const naiyoks=['Razzak', 'Kader', 'Elius', 'Jashim', 'Bappi', 'Shakib',]
    const products=[
      {name:'Photoshop', price:'$70'},
      {name:'Illustartor', price:'$60'},
      {name:'Adobe Reader', price:'$6.5'},
      {name:'Premier Pro', price:'$80'},
      {name:'Acrobat Pro', price:'$10'},

    ]
    return(
    <div className="App">
      <header className="App-header">
      <p>I am a react person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>        
         {
            naiyoks.map(naiyok => <li>{naiyok}</li>)
         }
      {
        products.map(product =><li>{product.name}</li>)
      }
         </ul>
      {
        products.map(pd =><Product product={pd}></Product>)
      }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setcount]=useState(0);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setcount(count-1)}>Decrease</button>
      <button onClick={() => setcount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setusers]=useState([]);
  useEffect(() =>{
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setusers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
    <ul>
      {
      users.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>
  )
}

function Product(props){
  const productStyle=
  {
    border:'1px solid gray',
    backgroundColor:'lightgray',
    borderRadius:'2px',
    width:'200px',
    height:'200px',
    Float:'left',
    margin:'2px',
  }
    return(
      <div style={productStyle}>
        <h3>{props.name}</h3>
        <h2>{props.price}</h2>
        <button style={{fontWeight:'bold', backgroundColor:'Orange', borderRadius:'3px', border:'none', padding:'5px',}}>Buy Now</button>
      </div>
    )
}

export default App;
