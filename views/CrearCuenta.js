import React from 'react';
import {View} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';

const CrearCuenta = () => {
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
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default CrearCuenta;
