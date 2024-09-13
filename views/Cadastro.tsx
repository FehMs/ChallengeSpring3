import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

export default function Cadastro() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [contato, setContato] = useState('');

  const navigation = useNavigation();
  const { cadastro } = useContext(AuthContext);

  const createUser = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuário criado com sucesso:", result.user);

      navigation.navigate('Login');
    } catch (error) {
      console.error("Erro ao criar usuário:", error.message);
    }
  };

  const handleRegister = () => {
    cadastro(usuario, password, cnpj, empresa, contato);
    createUser();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput  
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      <TextInput  
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Empresa"
        value={empresa}
        onChangeText={setEmpresa}
      />
      <TextInput
        style={styles.input}
        placeholder="Contato"
        value={contato}
        onChangeText={setContato}
        keyboardType="phone-pad"
      />
      <Button title='Cadastrar' onPress={handleRegister} />
    </ScrollView>
  );
};


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
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#004d00',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
