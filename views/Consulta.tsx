import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native'; 
import Navbar from '../components/Navbar';
import Spinner from 'react-native-loading-spinner-overlay';


export default function Consulta() {
  const [produtos, setProdutos] = useState('');
  const [meta, setMetas] = useState('');
  const [canais, setCanais] = useState('');
  const [desafio, setDesafio] = useState('');
  const [estilo, setEstilo] = useState('');
  const [meses, setMeses] = useState('');
  const [estrategia, setEstrategia] = useState('');

  const { perguntas } = useContext(AuthContext);

  const navigation = useNavigation();

  const handleRegister = () => {
    perguntas(produtos, meta, canais, desafio, estilo, meses, estrategia);
    alert('Perguntas Cadastradas com sucesso')
    navigation.navigate('Home');
    
  };


return(
  <ScrollView style={styles.maincontainer}>
    <Spinner />
    <Navbar />
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Quais roupas sua empresa vende?</Text>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: (Camisetas, saias, shorts)"
          value={produtos}
          onChangeText={setProdutos}
        />
        <View style={styles.line}></View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Qual sua meta?</Text>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: (Aumentar lucro, visibilidade)"
          value={meta}
          onChangeText={setMetas}
        />
        <View style={styles.line}></View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Quais canais de marketing a empresa utiliza atualmente?</Text>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: (redes sociais, e-mail marketing)"
          value={canais}
          onChangeText={setCanais}
        />
        <View style={styles.line}></View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Quais os principais desafios da empresa ao promover seus produtos?</Text>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: (Aumentar lucro, aumentar visibilidade)"
          value={desafio}
          onChangeText={setDesafio}
        />
        <View style={styles.line}></View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Qual o estilo de roupa sua marca tem como foco?</Text>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: (Casual, Esportivo...)"
          value={estilo}
          onChangeText={setEstilo}
        />
        <View style={styles.line}></View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Quais meses sua empresa tem mais lucro?</Text>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: (Janeiro, Fevereiro...)"
          value={meses}
          onChangeText={setMeses}
        />
        <View style={styles.line}></View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Sua empresa já utiliza estratégias de marketing? Se sim, quais?</Text>
        <TextInput
          style={styles.input}
          placeholder="Descreva as estratégias de marketing"
          value={estrategia}
          onChangeText={setEstrategia}
        />
        <View style={styles.line}></View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.labelText}>Consultar</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
)

}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#fff',
  },
  container: {
    width: "100%",
    flex: 1,
    paddingRight: 60,
    margin: 20,
    borderRadius: 7,
  },
  formGroup: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16
  },
  button: {
    backgroundColor: '#7f9f86',
    alignSelf: 'center',
    justifyContent:'center',
    width: 100,
    height: 45,
  },
  labelText: {
    alignSelf: 'center',
  },
  line: {
    backgroundColor: '#ba8902',
    height: 1,
    width: '100%',
  }

});

