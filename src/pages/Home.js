import { Dimensions, TouchableOpacity, Text, View, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({ navigation }) {

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>


        <View style={styles.box}>
          <View style={styles.container}>
            <Text style={styles.textoBox}>Configure aqui um novo monitoramento do plantio</Text>
            <View style={styles.flexbox}>
              <TouchableOpacity
              onPress={navigation.navigate('CadastroAudio')}>

                
                <Image
                  style={styles.imageH}
                  source={require("../assets/images/mic.png")}>
                </Image>
              </TouchableOpacity>



            </View>
            <Text style={styles.t3}>Continue regando regularmente</Text>

          </View>
          <View style={styles.container}>
            <Text style={styles.textoBox}>Média semanal do Cultivo</Text>
            <View style={styles.flexbox}>
              <View>
                <Image
                  style={styles.imageH}
                  source={require("../assets/images/plantaHome.png")}>
                </Image>
              </View>
              <View>
                <Text style={styles.t1}>Status:</Text>
                <Text style={styles.t2}>Saudavel</Text>
                <Text style={styles.t3}>Continue regando regularmente</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.textoBox}>Acompanhe o status do seu plantio</Text>
            <View style={styles.flexbox}>
              <View>
                <Image
                  style={styles.imageH}
                  source={require("../assets/images/velocimetro.png")}>
                </Image>
              </View>

            </View>
          </View>



          <View style={styles.container}>
            <Text style={styles.textoBox}>Média semanal do Cultivo</Text>
            <View style={styles.flexColumn}>
              <View style={styles.flexbox1}>
                <Image
                  style={styles.softIcon}
                  source={require("../assets/images/gota.png")}>
                </Image>
                <Text style={styles.textoFinal}>Aumente o nível de água</Text>
              </View>

            </View>
            <View style={styles.flexColumn}>
              <View style={styles.flexbox1}>
                <Image
                  style={styles.softIcon}
                  source={require("../assets/images/estresse.png")}>
                </Image>
                <Text style={styles.textoFinal}>Plantio sob estresse</Text>
              </View>

            </View>
          </View>

        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  softIcon: {
  },

  box: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    gap: 40,
    alignItems: 'center'


  },
  textoBox: {
    textAlign: "center",
    color: "#4B4B4B",
    fontWeight: "700",
    fontSize: 17,

  },
  textoFinal: {
    paddingLeft: 40,
    alignSelf: 'center'


  },
  flexbox1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    backgroundColor: "#f3f0f0",
    alignItems: 'center',
    padding: 12,
    width: '95%',
    justifyContent: 'center',
    borderRadius: 20
  },
  t1: {
    fontSize: 35,
  },
  t2: {
    color: "#80C053",
    fontSize: 43,
    fontWeight: 'bold'

  },


  flexbox: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Cor branca com 50% de opacidade
  },


});