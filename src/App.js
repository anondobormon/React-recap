import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Learning React</p>
        <Users></Users>
        <div>
          {
            users.map(user => <Users name={user.name} email={user.email}></Users>)
          }
        </div>

      </header>
    </div>
  );
}

function Users(props) {

  return (
    <div style={productStyle}>
      <h3>This is the recap session</h3>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  )
}

let productStyle = {
  boxSizing: 'border-box',
  border: '2px solid black',
  borderRadius:'5px',
  backgroundColor: 'lightgray',
  height: '300px',
  width: '400px',
  color: 'black',
  margin: '10px'
}




export default App;
