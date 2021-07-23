//Imports
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import {
  firebaseConfig
} from "../firebase-credentials";
import firebase from "firebase/app";
import 'firebase/firestore';

import Success from './Success';
import Error from './Error';
import Form from './Form';
import Results from "./Results";

import '../styles/App.css';

function App() {
  //Initalise Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/result/:id/:phone'>
          <Results />
        </Route>
        <Route exact path='/success'>
          <Success />
        </Route>
        <Route exact path='/error/:status'>
          <Error />
        </Route>
        <Route exact path='/'>
          <Form />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
