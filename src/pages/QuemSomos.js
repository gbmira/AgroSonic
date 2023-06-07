import { Dimensions, Text, View, Image, StyleSheet,  ScrollView, SafeAreaView } from 'react-native';

import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Entypo from 'react-native-vector-icons/Entypo'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;




export default function QuemSomos() {





  return (

    <SafeAreaView style={styles.safeArea}>

      <ScrollView contentContainerStyle={styles.container}>




        <Image

          style={styles.ImageHome}

          source={require('../assets/images/agricola1.jpg')}

        />




        <View style={styles.initialTexts}>




          <Text style={styles.mainText}>

            Maximize a sua produção e reduza {' '}

            <Text style={styles.textGreen}>Desperdícios</Text>

          </Text>




          <Text style={styles.texts}>

            A <Text style={styles.textAgro}>Agro</Text>

            <Text style={styles.textSonic}>Sonic</Text> tem como objetivo criar uma solução capaz de maximizar as produções agrícolas e <Text style={styles.decorationLine}>reduzir desperdícios.</Text>

           Utilizando tecnologias como inteligência artificial (IA) generativa, internet das coisas (IoT) e microfones ultrassônicos, a empresa será capaz de realizar o <Text style={styles.decorationLine}>mapeamento sonoro</Text> das espécies cultivadas.




          </Text>




          <Text style={styles.texts}>

            Através do mapeamento e cruzamento de informações das espécies mais consumidas, a AgroSonic poderá auxiliar na identificação de problemas invisíveis a olho nu, que afetam a qualidade, o período de desenvolvimento e o desperdício de alimentos que poderiam ser destinados a áreas com escassez.

          </Text>




          <Text style={styles.texts}>

            Nosso processo de aprendizado de máquina, usando classificação e redes neurais, é utilizado para treinar modelos que analisam os sons das plantas e fornecem<Text style={styles.decorationLine}>indicações sobre as necessidades de cada cultivo.</Text>

          </Text>




             <Image

          style={styles.ImageHome2}

          source={require('../assets/images/plantafone1.jpg')}

        />

        </View>





        <View style={styles.iconParts}>




          <View style={styles.mainTextIcon}>

            <View style={styles.textContainer}>

              <Text style={styles.choose}>

                Nosso Aplicativo</Text>

              

            </View>

           

          </View>




          <View style={styles.iconPart1}>

            <Icon name="computer" size={45} color="#408241"></Icon>

            <Text style={styles.texts3icon}>

            <Text style={styles.decorationLine}>Solução automatizada</Text>, simples e intuitiva

            </Text>

          </View>




          <View style={styles.iconPart2}>

            <FontAwesome name="mobile-phone" size={60} color="#408241"></FontAwesome>

            <Text style={styles.texts3icon}>

              Mobilidade para monitorar seu plantio de qualquer lugar

            </Text>

          </View>




          <View style={styles.iconPart3}>

            <Entypo name="bar-graph" size={45} color="#408241"></Entypo>

            <Text style={styles.texts3icon}>

            <Text style={styles.decorationLine}>Gráficos atualizados</Text> de hora em hora

            </Text>

          </View>




          <View style={styles.iconPart4}>

            <Icon name="search" size={45} color="#408241"></Icon>

            <Text style={styles.texts3icon}>

              Pesquisa e desenvolvimento contínuos do banco de dados</Text>

  

          </View>




            <Image

          style={styles.ImageHome3}

          source={require('../assets/images/Mobile.jpg')}

        />

      

        </View>





        <View style={styles.finalTexts}>

          <Text style={styles.texts3}>

            Com a economia dos recursos utilizados os produtores preservam o meio ambiente, a empresa gera valor e os consumidores criam maior empatia e confiança nos produtores.

          </Text>




          <Text style={styles.texts3}>

           Os assinantes da <Text style={styles.textAgro}>Agro</Text>

            <Text style={styles.textSonic}>Sonic</Text> terão acesso a informações precisas sobre o estado de saúde do seu plantio, tornando os processos mais produtivos, tecnológicos e reduzindo desperdícios.

          </Text>




          <Text style={styles.texts3}>

            

A IA Sonora é uma nova forma de entender nossos comportamentos e colabora com diversos estágios do processo do cultivo, em especial com o meio ambiente e pessoas com escassez de recursos.




          </Text>

        </View>





        <Image style={styles.imagePlanta} source={require('../assets/images/agricola.jpg')} />




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




   ImageHome2: {

    width: windowWidth * 1,

    height: windowHeight * 0.3,

    marginBottom: 10,

    marginTop: 30,

  },




  ImageHome3: {

    width: windowWidth * 1,

    height: windowHeight * 0.5,

    marginBottom: 10,

    marginTop: 30,

  },





  initialTexts: {

    flex: 1,

    width: '90%',

    margin: 16,

    alignItems: 'center',

    justifyContent: 'center'

  },




  mainText: {

    fontSize: 30,

    fontStyle: 'normal',

    textAlign: 'center',

    fontWeight: 'bold',

    lineHeight: 27,

    color: 'black',

    textShadowColor: 'rgba(0, 0, 0, 0.15)',

    textShadowOffset: { width: 0, height: 4 },

    textShadowRadius: 4,

    marginBottom: 15,

    marginTop: 5,

  },




  textGreen: {

    color: '#408241',

  },




  texts: {

    marginTop: 20,

    textAlign: 'center',

    fontSize: 15,

    width: '90%',

    color: 'black',

  },





  iconParts: {

    width: '80%',

    justifyContent: 'center',

    alignItems: 'center',

    gap: 5

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

    fontSize: 30,

    fontStyle: 'normal',

    textAlign: 'center',

    fontWeight: 'bold',

    marginBottom: 30,

    marginRight: 8,

    lineHeight: 27,

    color: 'black',

    textShadowColor: 'rgba(0, 0, 0, 0.15)',

    textShadowOffset: { width: 0, height: 4 },

    textShadowRadius: 4,

  },




  texts3icon: {

    textAlign: 'center',

    padding: 20,

    fontSize: 15,

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




  finalTexts: {

    width: '100%',

    margin: 15,

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