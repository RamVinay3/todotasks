import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';
import app from './firebase'
import { BrowserRouter } from "react-router-dom";
// import auth from './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));
Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/archive')
root.render(
 <BrowserRouter>
    <App />
 </BrowserRouter>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
