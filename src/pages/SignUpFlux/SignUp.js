import {
  Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput,
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { Formik } from "formik";
import { client } from "../../../Api/index";




export default function SignUp({ navigation }) {


  const handleNext = async (values) => {
    // console.log(`Valores: ${JSON.stringify(values)}`)
    navigation.navigate('SignUpAdress', { values });


    // if (senha.length < 6) {
    //   alert('A senha deve ser maior que 6 caracteres!');
    // } else {
    //   if (senha === confirmaSenha) {


    //   }
    // }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texts}>
        Cadastre<Text style={styles.textGreen}>-se</Text>
      </Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/planta.png')}
      />

      <Formik initialValues={{ nome: "", email: "", telefone: "", cpf: "", senha: ""  }} onSubmit={handleNext}>
        {(
          { handleChange, handleSubmit, values }
        ) => (
          <>


            <View style={styles.inputArea}>
              <TextInput
                onChangeText={handleChange("nome")}
                value={values.nome}

                style={styles.inputs}
                placeholder="Nome de usuário"
                placeholderTextColor="#408241"
                required

              />
              <TextInput
                onChangeText={handleChange("email")}
                value={values.email}
                style={styles.inputs}
                placeholder="E-mail"
                placeholderTextColor="#408241"
                required
              />

              <TextInput
                onChangeText={handleChange("cpf")} // Fix typo here
                value={values.cpf}
                style={styles.inputs}
                placeholder="Codigo Documento"
                placeholderTextColor="#408241"
              />


              <TextInput
                onChangeText={handleChange("telefone")}
                value={values.telefone}

                style={styles.inputs}
                placeholder="Telefone"
                placeholderTextColor="#408241"
                required
              />
                 
          <TextInput
          onChangeText={handleChange("senha")}
          style={styles.inputs}
          value={values.senha}
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor="#408241"
          required
          />
          
 

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Avançar</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>


  );

};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#A8EFAF',
    flex: 1,
    justifyContent: 'center',
  },

  texts: {
    fontSize: 35.2,
    bottom: 90,
    color: '#4B954C',
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 60,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  inputArea: {
    alignItems: 'center',
    width: '80%'


  },

  textGreen: {
    color: '#80c054',
  },

  image: {
    width: 202,
    height: 149.008,
    bottom: 65

  },

  inputs: {
    marginTop: 16,
    width: '100%',
    textAlign: 'center',
    height: 50,
    color: '#408241',
    backgroundColor: '#A8EFAF',
    borderRadius: 16.85,
    borderWidth: 3,
    borderColor: '#408241',
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 3,
  },

  button: {
    backgroundColor: '#408241',
    justifyContent: 'center',
    top: 40,
    width: '100%',
    height: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
