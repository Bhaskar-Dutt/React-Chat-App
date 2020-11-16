import React from 'react';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';
const firebase = require("firebase");
require("firebase/firestore");

class AppContainer extends React.Component {

  componentWillMount() {
    this.checkForSavedAuth();
  }

  // constructor() {
  //   super();
  //   firebase.initializeApp({
  //      apiKey: "AIzaSyCzDJIZZ7CKYlmLBaWDM-GfrKwj3ryozNk",
//        authDomain: "im-tutorial-99d52.firebaseapp.com",
//        databaseURL: "https://im-tutorial-99d52.firebaseio.com",
//        projectId: "im-tutorial-99d52",
//        storageBucket: "im-tutorial-99d52.appspot.com",
//        messagingSenderId: "766303193584",
//        appId: "1:766303193584:web:cbefbcf50ca5579ad23535"
  //   });
  //   this.db = firebase.firestore();
  //   this.state = {
  //     user: null
  //   };
  // }

  render() {
    if(this.state.user)
      return <DashboardComponent user={this.state.user}></DashboardComponent>
    else
      return <SignupComponent loginFn={this.loggedIn}></SignupComponent>
  }

  checkForSavedAuth = () => {
    console.log(firebase.auth().currentUser);
  };

  loggedIn = (user) => this.setState({ user: user });

}

export default AppContainer;
