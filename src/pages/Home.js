import { Dimensions, Text, View, Image, StyleSheet,  ScrollView, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home() {


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <Image
          style={styles.ImageHome}
          source={require('../assets/images/agricola.jpg')}
        />

        <View style={styles.initialTexts}>

          <Text style={styles.mainText}>
            Ficou muito mais preciso e fácil poder cuidar de nossas{' '}
            <Text style={styles.textGreen}>plantas!</Text>
          </Text>

          <Text style={styles.texts}>
            A <Text style={styles.textAgro}>Agro</Text>
            <Text style={styles.textSonic}>Sonic</Text> foi criada com objetivo de
            maximizar as produções agrícolas verticais e <Text style={styles.decorationLine}>reduzir desperdícios.</Text>
            Utilizando tecnologias como inteligência artificial (IA) generativa,
            internet das coisas (IoT) e microfones ultrassônicos, a empresa
            realiza o <Text style={styles.decorationLine}>mapeamento sonoro</Text> de espécies cultivadas.
          </Text>

          <Text style={styles.texts}>
            Estudos realizados pela universidade de Tel Aviv em Israel mostraram
            que pés de tomate e tabaco emitem padrões sonoros, que são medidos em
            kilohertz, os sons refletem sua saúde. Plantios saudáveis podem gerar
            até 2 estalos por hora, enquanto plantios desnutridos e desidratados
            podem gerar de 20 a 40 estalos por hora.
          </Text>

          <Text style={styles.texts}>
            Através de nosso mapeamento podemos auxiliar na identificação de
            problemas invisíveis a olho nu, que afetam a qualidade, o período de
            desenvolvimento e o desperdício de alimentos que poderiam ser
            destinados a áreas com escassez.
          </Text>

          <Text style={styles.texts}>
            Nosso processo de aprendizado de máquina, usando classificação e redes
            neurais, é utilizado para treinar modelos que analisam os sons das
            plantas e fornecem <Text style={styles.decorationLine}>indicações sobre as necessidades do cultivo.</Text>
          </Text>

        </View>

        <View style={styles.greenBackground}>
          <Text style={styles.texts2}>A <Text style={styles.textAgro}>Agro</Text><Text style={styles.textSonic}>Sonic</Text> foi criada com objetivo de maximizar as produções agrícolas verticais e reduzir desperdícios. Utilizando tecnologias como inteligência artificial (IA) generativa, internet das coisas (IoT) e microfones ultrassônicos, a empresa realiza o mapeamento sonoro de espécies cultivadas.</Text>
        </View>

        <View style={styles.iconParts}>

          <View style={styles.mainTextIcon}>
            <View style={styles.textContainer}>
              <Text style={styles.choose}>
                Por que nos <Text style={styles.textBG}>escolher?</Text>
              </Text>
            </View>
            <FontAwesome name="hand-o-left" size={30} color="#000" />
          </View>

          <View style={styles.iconPart1}>
            <Icon name="computer" size={45} color="#000"></Icon>
            <Text style={styles.texts3icon}>
            <Text style={styles.decorationLine}>Sistema automatizado</Text>, seguro, simples e Inteligente!
            </Text>
          </View>

          <View style={styles.iconPart2}>
            <FontAwesome name="mobile-phone" size={45} color="#000"></FontAwesome>
            <Text style={styles.texts3icon}>
              Acesso e <Text style={styles.decorationLine}>mobilidade</Text> para receber avisos sobre sua plantação de qualquer lugar.
            </Text>
          </View>

          <View style={styles.iconPart3}>
            <Entypo name="bar-graph" size={45} color="#000"></Entypo>
            <Text style={styles.texts3icon}>
            <Text style={styles.decorationLine}>Gráficos atualizados</Text> e de fácil entendimento!
            </Text>
          </View>

          <View style={styles.iconPart4}>
            <Icon name="search" size={45} color="#000"></Icon>
            <Text style={styles.texts3icon}>
              Controle, eficácia, <Text style={styles.decorationLine}>pesquisa e desenvolvimento.</Text>
            </Text>
          </View>

        </View>

        <View style={styles.greyBackground}>
          <View style={styles.iconGreyBG}>
            <MaterialCommunityIcons
              name="clock-fast"
              size={45}
              color="green"></MaterialCommunityIcons>
            <Text style={styles.textIconGrey}>Tudo em tempo real!</Text>
          </View>

          <View style={styles.iconGreyBG}>
            <Icon name="attach-money" size={45} color="green"></Icon>
            <Text style={styles.textIconGrey}>Preço acessível</Text>
          </View>

          <View style={styles.iconGreyBG}>
            <Entypo name="leaf" size={45} color="green"></Entypo>
            <Text style={styles.textIconGrey}>Suas plantações saudáveis</Text>
          </View>
        </View>

        <View style={styles.finalTexts}>
          <Text style={styles.texts3}>
            Em 2020, mais de <Text style={styles.decorationLine}>800 milhões de pessoas</Text> estavam com fome, 2,4 bilhões
            de pessoas estavam inseguras alimentarmente e milhões de crianças
            sofriam de retardo de crescimento e caquexia.
          </Text>

          <Text style={styles.texts3}>
            A escassez de alimentos é agravada por mudanças climáticas, mal
            gerenciamento de safras e desigualdades sociais.
          </Text>

          <Text style={styles.texts3}>
            É necessário promover o desenvolvimento da agricultura sustentável e
            reduzir desperdícios, afinal combater a fome é uma questão de justiça
            social e desenvolvimento econômico do país.
          </Text>
        </View>


        <Image style={styles.imagePlanta} source={require('../assets/images/plantafone.jpg')} />

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Cor branca com 50% de opacidade
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flexGrow: 1,
  },

  ImageHome: {
    width: windowWidth * 1,
    height: windowHeight * 0.3,
    marginBottom: 10,
  },


  initialTexts: {
    flex: 1,
    width: '90%',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },

  mainText: {
    fontSize: 27,
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 27,
    color: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },

  textGreen: {
    color: '#408241',
  },

  texts: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    width: '90%',
    color: 'black',
  },

  greenBackground: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    height: 200,
    backgroundColor: '#356136',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
  },

  texts2: {
    textAlign: 'center',
    fontSize: 16,
    width: '90%',
    color: 'white',
  },

  iconParts: {
    width: '80%',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50
  },

  mainTextIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  choose: {
    fontSize: 27,
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: 8,
    lineHeight: 27,
    color: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },

  textBG: {
    backgroundColor: '#80c054',
  },

  texts3icon: {
    textAlign: 'center',
    padding: 20,
    fontSize: 16,
    width: '90%',
    color: 'black',
  },


  iconPart1: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  iconPart2: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  iconPart3: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  iconPart4: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  textAgro: {
    color: '#4b954c',
    fontWeight: 'bold',
  },

  textSonic: {
    color: '#80c054',
    fontWeight: 'bold',
  },

  greyBackground: {
    width: '100%',
    marginTop: 30,
    backgroundColor: '#C8C8C8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 560,
    gap: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },

  iconGreyBG: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 128,
    gap: 5,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20,
  },

  textIconGrey: {
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  finalTexts: {
    width: '80%',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  decorationLine:{
    textDecorationLine: 'underline',
    textDecorationColor: 'green',
  },

  texts3: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    width: '90%',
    color: 'black',
  },

  imagePlanta: {
    width: windowWidth * 1,
    height: windowHeight * 0.3,
  },

});