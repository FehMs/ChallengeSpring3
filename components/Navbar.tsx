import React from 'react';
import { Text, View, StyleSheet,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/AntDesign"

export default function Navbar(){

    const navigation = useNavigation();

    return(      
    <View>
      <View style={styles.header}>
        <Text style={styles.logo}>UP STYLE</Text>
        <View style={styles.nav}>
          <Text onPress={() => {navigation.navigate('Home')}} style={styles.navItem}>INÍCIO</Text>
          <Text onPress={() => {navigation.navigate('Quemsomos')}} style={styles.navItem}>QUEM SOMOS</Text>
        </View>
        <Icon onPress={() => {navigation.navigate('Login')}} name="user" size={30} color='#000'/>
      </View>
      <View style={styles.line}></View>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      marginTop: 10,
      backgroundColor: '#fff',
    },
    logo: {
      color: '#ba8902',
      fontSize: 20,
      fontWeight: 'bold',
    },
    nav: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    navItem: {
      color: '#000',
      marginHorizontal: 10,
      fontSize: 10,
    },
    line: {
      backgroundColor: '#ba8902',
      height: 1,
    },
  });