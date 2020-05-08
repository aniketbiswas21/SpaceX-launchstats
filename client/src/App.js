import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: '/graphql'
});

const App = () =>{
  return (
    <ApolloProvider client={client}>  
    <Router>
      <div className="container">
    <img src={logo} alt="SpaceX" style={{display: 'block', width: 300, margin: 'auto'}} />
    <Switch>
    <Route exact path ='/' component={Launches} />
    <Route exact path='/launch/:flight_number' component={Launch} />
    </Switch>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
