import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

/* -------------------------------------------------------------------------- */
/*              ip maquina virtual android http://10.0.2.2:4000/              */
/* -------------------------------------------------------------------------- */
// Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000/',

const uri_ios_android =
  Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000/';

const client = new ApolloClient({
  uri: uri_ios_android,
  cache: new InMemoryCache(),
});

const upTaskApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => upTaskApp);
