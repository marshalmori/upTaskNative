import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Text,
  IconButton,
  CloseIcon,
  Alert,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'native-base';

const CrearCuenta = () => {
  const [nombre, guardarNombre] = useState('');
  const [email, guardarEmail] = useState('');
  const [password, guardarPassword] = useState('');

  const [mensaje, guardarMensaje] = useState(null);

  // React navigation
  const navigation = useNavigation();

  // Toast
  const toast = useToast();

  // Cuando el usuario presiona en criar cuenta
  const handleSubmit = () => {
    // validar
    if (nombre === '' || email === '' || password === '') {
      // Mostar un error
      guardarMensaje('Todos los campos son obligatorios');
      return;
    }
    // password al menos 6 caracteres
    if (password.length < 6) {
      guardarMensaje('El password debe ser de al menos 6 caracteres.');
      return;
    }

    // guardar el usuario
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
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
            fontWeight="semibold">
            Crear una Cuenta
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
            fontWeight="medium"
            size="xs">
            ¡Regístrate para continuar!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Nombre</FormControl.Label>
              <Input onChangeText={texto => guardarNombre(texto)} />
            </FormControl>
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
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={() => handleSubmit()}>
              Crear Cuenta
            </Button>

            {mensaje && mostrarAlerta()}
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default CrearCuenta;
