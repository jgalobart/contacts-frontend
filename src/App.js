import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        //fetch(process.env.REACT_APP_BACKEND_URL+'contacts')
        fetch('https://contactapp-jgalobart.netlify.app/contacts')
            .then((response) => response.json())
            .then((json)=>console.log(json))
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
                <Contact></Contact>
            </ul>
        </header>
        </div>
    );
}

export default App;
