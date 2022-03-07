import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import { useEffect, useState } from 'react';

function App() {

    const [users,setUsers] = useState([])

    useEffect(() => {
        //fetch(process.env.REACT_APP_BACKEND_URL+'contacts')
        fetch('https://jgalobart-todo2.herokuapp.com/contacts')
            .then((response) => response.json())
            .then((json)=>setUsers(json))
    }, []);
    

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            <ul>
                {console.log(users)}
                {users.map((user)=>(
                    <Contact fname={user.fname} lname={user.lname}></Contact>
                ))}
            </ul>
        </header>
        </div>
    );
}

export default App;
