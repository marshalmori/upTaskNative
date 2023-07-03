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
  Link,
  Button,
  HStack,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

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
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
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
            <Button mt="2" colorScheme="indigo">
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
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default Login;
