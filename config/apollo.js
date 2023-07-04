import {Platform} from 'react-native';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {setContext} from '@apollo/client/link/context';
import {setContext} from 'apollo-link-context';

/* -------------------------------------------------------------------------- */
/*              ip maquina virtual android http://10.0.2.2:4000/              */
/* -------------------------------------------------------------------------- */
// Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000/',

const uri_ios_android =
  Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000/';

const authLink = setContext(async (_, {headers}) => {
  // Leer el token
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: authLink.concat(uri_ios_android),
  cache: new InMemoryCache(),
});

export default client;
