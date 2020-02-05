import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { SESSION_KEY } from "./config/constant";

function App() {
  const getSession = localStorage.getItem(SESSION_KEY);
  const userSession = getSession && JSON.parse(getSession).user;
  return (
    <Fragment>
      {userSession ? <Home user={userSession} /> : <Login />}
    </Fragment>
  );
}
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

export default App;

