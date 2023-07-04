import React, {useState} from 'react';
import {View} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Text,
  Alert,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Apollo
import {gql, useMutation} from '@apollo/client';

const AUTENTICAR_USUARIO = gql`
  mutation autenticarUsuario($input: AutenticarInput) {
    autenticarUsuario(input: $input) {
      token
    }
  }
`;

const Login = () => {
  const [email, guardarEmail] = useState('');
  const [password, guardarPassword] = useState('');

  const [mensaje, guardarMensaje] = useState(null);

  const navigation = useNavigation();

  const [autenticarUsuario] = useMutation(AUTENTICAR_USUARIO);

  // Cuando el usuario presiona en iniciar sesion
  const handleSubmit = async () => {
    // validar
    if (email === '' || password === '') {
      // Mostar un error
      guardarMensaje('Todos los campos son obligatorios');
      return;
    }

    try {
      // autenticar el usuario
      const {data} = await autenticarUsuario({
        variables: {
          input: {
            email,
            password,
          },
        },
      });

      const {token} = data.autenticarUsuario;
      // Colocar token en storage
      await AsyncStorage.setItem('token', token);

      // Redireccionar a Proyectos
      navigation.navigate('Proyectos');
    } catch (error) {
      // si hay un error mostrarlo
      guardarMensaje(error.message.replace('GraphQL error: ', ''));
    }
  };

  // muestra un mensaje toast
  const mostrarAlerta = () => {
    return (
      <Alert w="100%" colorScheme="success" status="error">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between">
            <HStack space={2} flexShrink={1} alignItems="center">
              <Text color="coolGray.800">{mensaje}</Text>
            </HStack>
          </HStack>
        </VStack>
      </Alert>
    );
  };

  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            UpTask
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            ¡Inicia sesión para continuar!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input onChangeText={texto => guardarEmail(texto)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                onChangeText={texto => guardarPassword(texto)}
              />
              <Link
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                mt="1">
                ¿Olvido la contraseña?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={() => handleSubmit()}>
              Iniciar Sesión
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                Soy un nuevo usuario.{' '}
              </Text>
              <Link
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                onPress={() => navigation.navigate('CrearCuenta')}>
                Crear Cuenta
              </Link>
            </HStack>
            {mensaje && mostrarAlerta()}
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default Login;
