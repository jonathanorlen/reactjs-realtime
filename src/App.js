import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import Home from './pages/Home';
import Navbar from './component/Nav';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const App = () => {

  return (
    <ApolloProvider client={client}>
        <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
   </ApolloProvider>
  );
}

export default App;
