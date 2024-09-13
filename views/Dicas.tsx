import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';

export default function Dicas(){

    const navigation = useNavigation();


    return(
      <ScrollView>
        <View>
            <Navbar/>
            <View>
                <Text style={styles.bannerText}>DICAS</Text>
                    <View style={styles.containerdicas} >
                        <Text style={styles.dicatitlle} >Entenda Seu Público-Alvo:</Text>
                        <Text style={styles.dicadesc} >Realize pesquisas para identificar as preferências e necessidades de suas clientes.</Text>
                        <Text style={styles.dicadesc} >Crie personas para guiar suas estratégias de marketing e ofertas de produtos.</Text>
                    </View>
                    <View style={styles.containerdicas}>
                        <Text style={styles.dicatitlle}>Invista em Marketing Digital:</Text>
                        <Text style={styles.dicadesc}>Redes Sociais: Use Instagram, Facebook e TikTok para mostrar suas coleções, oferecer promoções e interagir com seus clientes.</Text>
                        <Text style={styles.dicadesc}>Influenciadores: Colabore com influenciadores e blogueiras de moda para aumentar sua visibilidade.</Text>
                    </View>
                    <View style={styles.containerdicas}>
                        <Text style={styles.dicatitlle}>Ofereça uma Experiência de Compra Excepcional:</Text>
                        <Text style={styles.dicadesc}>Atendimento ao Cliente: Proporcione um atendimento personalizado e eficiente, tanto online quanto na loja física.</Text>
                        <Text style={styles.dicadesc}>Facilidade de Navegação: Garanta que seu site seja fácil de navegar, com um processo de compra simplificado e rápido.</Text>
                    </View>
                    <View style={styles.containerdicas}>
                        <Text style={styles.dicatitlle}>Aposte em E-commerce e Omnicanalidade:</Text>
                        <Text style={styles.dicadesc}>Loja Online: Mantenha uma loja online atraente e funcional.</Text>
                        <Text style={styles.dicadesc}>Integração: Ofereça uma experiência integrada entre sua loja física e online, como retiradas na loja para compras online.</Text>
                    </View>
                    <View style={styles.containerdicas}>
                        <Text style={styles.dicatitlle}>Colecione e Use Dados de Clientes:</Text>
                        <Text style={styles.dicadesc}>Análise de Dados: Utilize ferramentas de análise para entender padrões de compra e ajustar suas estratégias.</Text>
                        <Text style={styles.dicadesc}>Programas de Fidelidade: Implemente programas de fidelidade para recompensar clientes recorrentes e estimular a lealdade.</Text>
                    </View>
                    <View style={styles.containerdicas}>
                        <Text style={styles.dicatitlle}>Mantenha-se Atualizada com Tendências:</Text>
                        <Text style={styles.dicadesc}>Fashion Trends: Acompanhe as últimas tendências e adapte seu estoque conforme as mudanças no mercado.</Text>
                        <Text style={styles.dicadesc}>Feedback: Peça feedback dos clientes sobre novos produtos e coleções para ajustar suas ofertas.</Text>
                    </View>
                    <View style={styles.containerdicas}>
                        <Text style={styles.dicatitlle}>Cuide da Imagem da Marca:</Text>
                        <Text style={styles.dicadesc}>Identidade Visual: Mantenha uma identidade visual consistente e atraente.</Text>
                        <Text style={styles.dicadesc}>Comunicação: Desenvolva uma comunicação clara e envolvente que ressoe com seus valores e o estilo da marca.</Text>
                    </View>
            </View>
        </View>
      </ScrollView>
    )
}
const styles = StyleSheet.create({

    bannerText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "900",
        padding: 20,
      },
    
    containerdicas: {
        padding: 20,
    },

    dicadesc: {
        fontSize: 15,
    },
    dicatitlle: {
        fontWeight: '800',
        marginTop: 8,
        marginBottom: 8,
    },
  });