import logo from './logo.svg';
import React from 'react'
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import iceCreamReducer from './redux/iceCreams/iceCreamReducer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer'
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <UserContainer/> 
    <HooksCakeContainer/>
    <ItemContainer/>
   <ItemContainer/>
      <CakeContainer/>
      <iceCreamContainer/>
      <NewCakeContainer/> 
    </div>
    </Provider>
  );
}

export default App;
