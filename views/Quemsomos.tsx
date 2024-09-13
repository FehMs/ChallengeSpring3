import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';

export default function Quemsomos(){
    return(
    <View>
        <Navbar/>
        <View style={styles.container}>
            <Text style={styles.titulo}>Quem Somos?</Text>
            <Text style={styles.texto}>Somos a ponte definitiva para o sucesso imbatível da sua marca de moda feminina. Com estratégias completamente personalizadas e uma expertise incomparável, elevamos sua loja a um novo nível de destaque no mercado.</Text>
            <Text style={styles.texto}>Não apenas aumentamos a visibilidade da sua marca, mas também transformamos seus resultados, otimizando cada aspecto das suas vendas e garantindo o crescimento que você sempre sonhou.</Text>
            <Text style={styles.texto}>Nossa equipe apaixonada e dedicada está comprometida em tornar sua marca uma referência no setor, deixando uma impressão memorável em cada cliente. Confie em quem entende do assunto e prepare-se para ver sua loja alcançar patamares extraordinários de sucesso!</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 40,
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    titulo: {
        fontWeight: '900',
        fontSize: 18,
    },
    texto: {
        marginTop: 20,
        fontWeight: '400',
        fontSize: 17,
        width: "100%",
    },
  });