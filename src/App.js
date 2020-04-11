import React,{useState} from 'react';
import './App.css';
import AppRouter from './Router/AppRouter';
import PublicRouter from './Router/PublicRouter';

function App() {
  const isAuth = true;
  const isLoading = false;

  // keep isLoading in redux, so that if any component is loading
  // App component will render loading page
  // This can be kept within AppRouter as well incase navbar needs
  // to be kept on UI
  if(isLoading){
    return <div>Loading component</div>
  }


  if(isAuth)
    return <AppRouter/>
  else {
    return <PublicRouter/>
  }
}

export default App;
