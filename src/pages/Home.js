import { Dimensions, TouchableOpacity, Text, View, Image, StyleSheet, ScrollView, SafeAreaView, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from "formik";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
    } catch (error) {
      console.error(`Erro ao realizar a captação de audio ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.audioArea}>
          <View style={styles.header}>
            <Image
              style={styles.imageMic}
              source={require("../assets/images/mic.png")}
            />
          </View>

          <View id="inputs-formik">
            <Formik
              initialValues={{ plantio: "", qtMic: "", nmLocal: "", tpPlanta: "" }}
              onSubmit={handleLogin}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                touched,
                errors,
              }) => (
                <>
                  <Text style={styles.text1}>Iniciar captação de Áudio</Text>

                  <TextInput
                    onChangeText={handleChange("plantio")}
                    value={values.plantio}
                    style={styles.inputs}
                    placeholder="Nome do Plantio"
                    placeholderTextColor="#ffff"
                  />
                  {touched.login && errors.login && (
                    <Text style={styles.errorText}>{errors.login}</Text>
                  )}

                  <TextInput
                    onChangeText={handleChange("qtMic")}
                    value={values.qtMic}
                    style={styles.inputs}
                    placeholder="Quantidade de microfones"
                    placeholderTextColor="#ffff"
                    secureTextEntry
                  />

                  <TextInput
                    onChangeText={handleChange("nmLocal")}
                    value={values.nmLocal}
                    style={styles.inputs}
                    placeholder="Nome do Local"
                    placeholderTextColor="#ffff"
                    secureTextEntry
                  />

                  <TextInput
                    onChangeText={handleChange("tpPlanta")}
                    value={values.tpPlanta}
                    style={styles.inputs}
                    placeholder="Tipo de planta"
                    placeholderTextColor="#ffff"
                    secureTextEntry
                  />

                  {!isLoading ? (
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.buttonText}>Captar Áudio</Text>
                    </TouchableOpacity>
                  ) : (
                    <ActivityIndicator />
                  )}
                </>
              )}
            </Formik>
          </View>
        </View>


        <View style={styles.box}>
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
                <Text style={styles.t2}>Saudável</Text>
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
                <IonIcon name="ios-water" size={45} color="#2171ac"></IonIcon>
                <Text style={styles.textoFinal}>Aumente o nível de água</Text>
              </View>

            </View>
            <View style={styles.flexColumn}>
              <View style={styles.flexbox1}>
                <IonIcon name="ios-alert-circle-outline" size={45} color="red"></IonIcon>
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

  audioArea: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageMic:{
    width: 150,
    height: 150
  },
  

  softIcon: {
  },

  box: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    gap: 40,
    alignItems: 'center',
    marginBottom: 40,

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

  text1: {
    textAlign: "center",
    color: "#4B4B4B",
    marginTop: 20,
    marginBottom: 30,
    fontWeight: "700",
    fontSize: 17,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 2,
  },

  inputs: {
    marginBottom: 25,
    textAlign: "center",
    width: 250,
    height: 44,
    color: "white",
    backgroundColor: "#80C053",
    borderRadius: '20px',
    borderWidth: 3,
    borderColor: "#80C053",
    fontWeight: "700",
    fontSize: 12.866,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4, // para adicionar sombra no Android
    borderRadius: 20,
  },

  button: {
    alignSelf: 'center',
    justifyContent: "center",
    width: 130,
    height: 40,
    marginBottom: 30,
    marginTop: 15,
    borderRadius: 46.85,
    backgroundColor: "#4B954C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16.866,
  },

  flexColumn: {
    width: '100%',
  },
  flexbox1: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 100
  },

  container: {
    backgroundColor: "#f3f0f0",
    alignItems: 'center',
    padding: 12,
    width: '90%',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000',

    shadowOffset: {

      width: 0,

      height: 2

    },

    shadowOpacity: 0.25,

    shadowRadius: 4,

    elevation: 5,

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