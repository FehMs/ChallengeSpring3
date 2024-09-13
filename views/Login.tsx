import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { AuthContext } from '../context/AuthContext';
import PerfilHome from './PerfilHome';


export default function Login() {
  const navigation = useNavigation();
  const {isLoggedIn} = useContext(AuthContext); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doAuth = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login realizado com sucesso");
      navigation.navigate('PerfilHome');
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
    }
  };

  if (isLoggedIn) {
    return <PerfilHome />; 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Login' onPress={doAuth} />
      <Text style={styles.footerText}>Não tem uma conta? <Text style={styles.buttonCadastro} onPress={() => { navigation.navigate('Cadastro') }}>Cadastre-se</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  footerText: {
    marginTop: 20,
    color: '#888',
  },
  buttonCadastro: {
    color: '#4287f5',
  },
});
