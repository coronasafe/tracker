import React,{useState} from 'react';
import NavBar from './components/NavBar'
import CreateSuspect from "./components/NewSuspect/CreateSuspect"
import SuspectDetails from "./components/NewSuspect/SuspectDetails"
import './App.css';

function App() {
  return (
    <div>
    <NavBar />
    <CreateSuspect />
    </div>
  );
}

export default App;
