import logo from './logo.svg';
// import styles from "./myApp.module.css";
// import inputStyles from "./list.module.css"
import './App.css';
// import React from "react";
import Posts from './components/Posts/posts';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Posts/>
        
      </header>
    </div>
  );
}

export default App;
