import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"
import { AuthContext } from '../context/AuthContext';
import Login from './Login';

export default function PerfilHome(){

    const navigation = useNavigation();

    const { isLoggedIn } = useContext(AuthContext); 
    

    const doSignOut = () => {
        signOut(auth)
        navigation.navigate('Home')
    }

    return (
        <>
          {isLoggedIn ? 
          <View style={styles.container}>
                <View style={styles.wellcome}>
                    <Image source={require("../assets/wallpaper.jpg")} style={styles.image} />
                    <View style={styles.containertop}>
                        <Text style={styles.textwellcome} >Olá, Seja Bem-vindo(a)</Text>
                        <TouchableOpacity onPress={doSignOut}>
                            <Text style={styles.textsignout}>SignOut</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containeractions} >
                        <Text style={styles.textconsult}>Consultoria: </Text>
                        <Text style={styles.desc} >Está pronta para levar sua startup de moda para o próximo nível? Descubra estratégias exclusivas e soluções personalizadas para impulsionar sua loja e conquistar o mercado. Com nossa consultoria, você ganhará insights valiosos e um plano de ação eficaz para maximizar seu crescimento e se destacar no competitivo mundo da moda feminina.</Text>
                        <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('Consulta')}}>
                            <Text style={styles.cardText}>Ver Consultoria</Text>
                        </TouchableOpacity>
                        <Text style={styles.textconsult}>Dicas: </Text>
                        <Text style={styles.desc} >Quer destacar sua startup no mercado da moda feminina? Confira nossas dicas essenciais para otimizar suas estratégias e alcançar o sucesso</Text>
                        <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('Dicas')}}>
                            <Text style={styles.cardText}>Ver Dicas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
        : <Login />}
        </>
      );
}


const styles = StyleSheet.create({
    container: {

    },
    wellcome: {
        alignItems: 'center',
    },
    containertop: {
        bottom: '70%',
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    containeractions: {
        padding: 20,
        bottom: 100
    },
    textwellcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        width: '40%'
    },
    textsignout: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
        bottom: 90,
    },

    image: {
        width: '100%',
        height: 400,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    textconsult: {
        fontWeight: '900',
        fontSize: 20,
    },
    card: {
        alignSelf: 'center',
        backgroundColor: "#ba8902",
        padding: 12,
        height: 40,
        width: 200,
        borderRadius: 40,
      },
      cardText: {
        alignSelf: 'center',
        fontSize: 12,
        fontWeight:'bold',
        color: "white",
      },
      desc: {
        marginTop: 6,
        marginBottom: 10,
      }
  });