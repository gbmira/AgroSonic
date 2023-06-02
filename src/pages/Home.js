import { Dimensions, Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, ScrollView, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home() {


  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        style={styles.ImageHome}
        source={require('../assets/images/agricola.jpg')}
      />

      <View style={styles.initialTexts}>

        <Text style={styles.mainText}>
          Ficou muito mais preciso e fácil poder cuidar de nossas <Text style={styles.textGreen}>plantas!</Text>
        </Text>

        <Text style={styles.texts}>
          Em 2020, mais de 800 milhões de pessoas estavam com fome, 2,4 bilhões de pessoas estavam inseguras alimentarmente
          e milhões de crianças sofriam de retardo de crescimento e caquexia.
        </Text>

        <Text style={styles.texts}>
          A escassez de alimentos é agravada por mudanças climáticas, mal gerenciamento de safras e desigualdades sociais.
        </Text>

        <Text style={styles.texts}>
          É necessário promover o desenvolvimento da agricultura sustentável e reduzir desperdícios, afinal combater a fome é
          uma questão de justiça social e desenvolvimento econômico do país.
        </Text>

      </View>

      <View style={styles.greenBackground}>
        <Text style={styles.texts2}>A <Text style={styles.textAgro}>Agro</Text><Text style={styles.textSonic}>Sonic</Text> foi criada com objetivo de maximizar as produções agrícolas verticais e reduzir desperdícios. Utilizando tecnologias como inteligência artificial (IA) generativa, internet das coisas (IoT) e microfones ultrassônicos, a empresa realiza o mapeamento sonoro de espécies cultivadas.</Text>
      </View>

      <View style={styles.finalTexts}>

        <Text style={styles.texts3}>
          Estudos realizados pela universidade de Tel Aviv em Israel mostraram que pés de tomate e tabaco emitem padrões sonoros, que são medidos em kilohertz, os sons refletem sua saúde. Plantios saudáveis podem gerar até 2 estalos por hora, enquanto plantios desnutridos e desidratados podem gerar de 20 a 40 estalos por hora. Além disso, mudanças no comportamento das plantas devido à presença de machucados, pragas e insetos também alteram os seus estalos.
        </Text>

        <Text style={styles.texts3}>
          Através do mapeamento das espécies mais consumidas, a <Text style={styles.textAgro}>Agro</Text><Text style={styles.textSonic}>Sonic</Text> pode auxiliar na identificação de problemas invisíveis a olho nu, que afetam a qualidade, o período de desenvolvimento e o desperdício de alimentos que poderiam ser destinados a áreas com escassez.
        </Text>

        <Text style={styles.texts3}>
          Nosso processo de aprendizado de máquina, usando classificação e redes neurais, é utilizado para treinar modelos que analisam os sons das plantas e fornecem indicações sobre as necessidades do cultivo.
        </Text>

      </View>


      <Image style={styles.imagePlanta} source={require('../assets/images/plantafone.jpg')} />

    </ScrollView>

  )
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#A8EFAF', // Cor branca com 50% de opacidade
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flexGrow: 1,
  },

  ImageHome:{
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
    color: '#4B4B4B',
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
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  texts2: {
    textAlign: 'center',
    fontSize: 16,
    width: '90%',
    color: 'white',
  },

  finalTexts: {
    width: '80%',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },

  texts3: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    width: '90%',
    color: 'black',
  },

  textAgro: {
    color: '#4b954c',
    fontWeight: 'bold',
  },

  textSonic: {
    color: '#80c054',
    fontWeight: 'bold',
  },

  imagePlanta:{
    width: windowWidth * 1,
    height: windowHeight * 0.3,
  },

});