import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback
} from "react-native";

import React, { useState, useEffect, useCallback } from "react";

import { Formik } from "formik";

import axios from "axios";

import { client } from "../../Api/index";



const imgBg = '../assets/images/bglogin.png'

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      const response = await client.post(`/api/auth/signin`, values);
      console.log("meu response", response);
      navigation.navigate('Home')
      
    } catch (error) {
      console.error(`Erro ao realizar o login ${error}`);
    } finally {
      console.log("ta passando aqui");
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image
          style={styles.imageH}
          source={require("../assets/images/LogoAgroSonic.png")}
        />
      </View>

      <View id="inputs-formik">
        <Formik initialValues={{ login: "", senha: "" }} onSubmit={handleLogin}>
          {(
            { handleChange, handleSubmit, values } // Fix typo here
          ) => (
            <>
              <Text style={styles.text1}>Entre com sua conta!</Text>

              <TextInput
                onChangeText={handleChange("login")} // Fix typo here
                value={values.login}
                style={styles.inputs}
                placeholder="Usuário"
                placeholderTextColor="#408241"
              />

              <TextInput
                onChangeText={handleChange("senha")} // Fix typo here
                value={values.senha}
                style={styles.inputs}
                secureTextEntry={true}
                placeholder="Senha"
                placeholderTextColor="#408241"
              />

              

              {!isLoading ? (
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
              ) : (
                <ActivityIndicator />
              )}
            </>
          )}
        </Formik>

      </View>

      <View style={styles.footer}>
        <Text
          style={styles.textStart}
          onPress={() => navigation.navigate("SignUp")}
        >
          Desejo <Text style={styles.textEnd}>criar uma conta</Text>
        </Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#A8EFAF",

    alignItems: "center",

    justifyContent: "center",
  },

  bgImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    justifyContent: "center",

    marginBottom: 40,
  },

  imageH: {
    width: 321,

    height: 129,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 5,
    },

    shadowOpacity: 0.2,

    shadowRadius: 4,
  },

  text1: {
    textAlign: "center",

    color: "#408241",

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
    textAlign: "center",

    width: 300,

    height: 55,

    color: "#408241",

    backgroundColor: "#A8EFAF",

    borderRadius: 46.85,

    borderWidth: 3,

    borderColor: "#408241",

    fontWeight: "700",

    fontSize: 12.866,

    marginBottom: 20,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,

      height: 4,
    },

    shadowOpacity: 0.25,

    shadowRadius: 4,

    borderRadius: 20,
  },

  button: {
    justifyContent: "center",

    width: 300,

    height: 55,

    marginBottom: 30,

    marginTop: 15,

    borderRadius: 46.85,

    backgroundColor: "#408241",

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

  footer: {
    alignItems: "center",

    justifyContent: "center",
  },

  textStart: {
    textAlign: "center",

    color: "#408241",

    fontWeight: "700",

    fontSize: 13.866,

    textShadowColor: "rgba(0, 0, 0, 0.15)",

    textShadowOffset: {
      width: 0,

      height: 3,
    },

    textShadowRadius: 2,
  },

  textEnd: {
    textAlign: "center",

    color: "#ffffff",

    fontWeight: "700",
  },
});