import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import { Formik } from 'formik';
import { client } from '../../../Api/index';

export default function SignUp({ navigation }) {

  const [isLoading, setIsLoading] = useState(false);

  const handleNext = async (values) => {
    try {
      setIsLoading(true);
      navigation.navigate('SignUpAdress', { values });
    } catch (error) {
      console.log(error)
    } finally{
      setIsLoading(false);
    }
    
    
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <Text style={styles.texts}>
            Cadastre<Text style={styles.textGreen}>-se</Text>
          </Text>
          <Image style={styles.image} source={require('../../assets/images/planta.png')} />
          <Formik initialValues={{ nome: '', email: '', telefone: '', cpf: '', senha: '' }} onSubmit={handleNext}>
            {({ handleChange, handleSubmit, values }) => (
              <>
                <View style={styles.inputArea}>
                  <TextInput
                    onChangeText={handleChange('nome')}
                    value={values.nome}
                    style={styles.inputs}
                    placeholder="Nome de usuário"
                    placeholderTextColor="#408241"
                    required
                  />
                  <TextInput
                    onChangeText={handleChange('email')}
                    value={values.email}
                    style={styles.inputs}
                    placeholder="E-mail"
                    placeholderTextColor="#408241"
                    required
                  />
                  <TextInput
                    onChangeText={handleChange('cpf')}
                    value={values.cpf}
                    style={styles.inputs}
                    placeholder="Codigo Documento"
                    placeholderTextColor="#408241"
                  />
                  <TextInput
                    onChangeText={handleChange('telefone')}
                    value={values.telefone}
                    style={styles.inputs}
                    placeholder="Telefone"
                    placeholderTextColor="#408241"
                    required
                  />
                  <TextInput
                    onChangeText={handleChange('senha')}
                    style={styles.inputs}
                    value={values.senha}
                    secureTextEntry
                    placeholder="Senha"
                    placeholderTextColor="#408241"
                    required
                  />
                  {!isLoading ? (
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                  <Text style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>
              ) : (
                <ActivityIndicator />
              )}
                </View>
              </>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#A8EFAF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    fontSize: 35.2,
    color: '#4B954C',
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 60,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },

  inputArea: {
    width: '100%',
    alignItems: 'center'
  },
  textGreen: {
    color: '#80c054',
  },
  image: {
    width: 202,
    height: 149.008,
  },
  inputs: {
    marginTop: 16,
    width: 300,
    textAlign: 'center',
    height: 55,
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
    marginTop: 16,
    backgroundColor: '#408241',
    justifyContent: 'center',
    width: 200,
    height: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});