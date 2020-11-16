import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); 

firebase.initializeApp({
  apiKey: "AIzaSyCzDJIZZ7CKYlmLBaWDM-GfrKwj3ryozNk",
  authDomain: "im-tutorial-99d52.firebaseapp.com",
  databaseURL: "https://im-tutorial-99d52.firebaseio.com",
  projectId: "im-tutorial-99d52",
  storageBucket: "im-tutorial-99d52.appspot.com",
  messagingSenderId: "766303193584",
  appId: "1:766303193584:web:cbefbcf50ca5579ad23535"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. 
serviceWorker.unregister();
