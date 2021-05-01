import React from 'react';
import Routes from './route'
//import { store } from '../src/reducers/user';
//import {Provider } from 'react-redux'
import 'toastr/build/toastr.min.js'
import 'bootswatch/dist/flatly/bootstrap.css';
import 'toastr/build/toastr.css'

function App() {
  return (
    //<Provider store={store}>
    
      <div className="App">
         <Routes />
      </div>
    //</Provider>
     
  );
}

export default App;
