import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';

export default function Home(){

    const navigation = useNavigation();


    return(
      <View>
        <Navbar/>
        <Image source={require("../assets/bannerhomes.jpg")} style={styles.image} />
        <View style={styles.content}>
        <Text style={styles.bannerText}>ELEVE SEU ESTILO. IMPULSIONE SUA LOJA FEMININA COM RESULTADOS QUE BRILHAM.</Text>
        <Image resizeMode='contain' source={require('../assets/business.png')} style={styles.icon} />
          <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('PerfilHome')}}>
            <Text style={styles.cardText}>APRIMORE SUA EMPRESA</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    bannerText: {
      color: '#000',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: "900",

    },
    content: {
      height: 500,
      justifyContent: 'center',
    },
    icon:{
      opacity: 0.3,
      width: 500,
      height: 400,
      alignSelf: 'center'
    },
    card: {
      alignSelf: 'center',
      backgroundColor: "#ba8902",
      position: 'absolute',
      bottom: "25%",
      padding: 12,
      height: 40,
      width: "70%",
      borderRadius: 40,
    },
    cardText: {
      alignSelf: 'center',
      fontSize: 12,
      fontWeight:'bold',
      color: "white",
    },
    image: {
      width: '100%',
      height: 300,      
    }
  });