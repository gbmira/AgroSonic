import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { Formik } from 'formik';
import { client } from '../../../Api/index';
import UserContext from '../../../contexts/UserContext';

export default function SignUp({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(UserContext);

  const handleNext = async (values) => {
    try {
      setIsLoading(true);
      updateUser(values.nome, values.email);
      navigation.navigate('SignUpAdress', { values });
    } catch (error) {
      console.log(error);
    } finally {
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
     
          <Image style={styles.image} source={require('../../assets/images/logoCadastro.png')} />
          <Text style={styles.text1}>Agora vamos criar o seu perfil...</Text>

          <Formik initialValues={{ nome: '', email: '', telefone: '', cpf: '', senha: '' }} onSubmit={handleNext}>
            {({ handleChange, handleSubmit, values }) => (
              <>
                <View style={styles.inputArea}>
                  <TextInput
                    onChangeText={handleChange('nome')}
                    value={values.nome}
                    style={styles.inputs}
                    placeholder="Nome de usuário"
                    placeholderTextColor="#FFFF"
                    required
                  />
                  <TextInput
                    onChangeText={handleChange('email')}
                    value={values.email}
                    style={styles.inputs}
                    placeholder="E-mail"
                    placeholderTextColor="#FFFF"
                    required
                  />
                  <TextInput
                    onChangeText={handleChange('cpf')}
                    value={values.cpf}
                    style={styles.inputs}
                    placeholder="CPF"
                    placeholderTextColor="#FFFF"
                  />
                  <TextInput
                    onChangeText={handleChange('telefone')}
                    value={values.telefone}
                    style={styles.inputs}
                    placeholder="Telefone"
                    placeholderTextColor="#FFFF"
                    required
                  />
                  <TextInput
                    onChangeText={handleChange('senha')}
                    style={styles.inputs}
                    value={values.senha}
                    secureTextEntry
                    placeholder="Senha"
                    placeholderTextColor="#FFFF"
                    required
                  />
                  {!isLoading ? (
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    backgroundColor: '#FFFF',
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
    alignItems: 'center',
  },
  textGreen: {
    color: '#80c054',
  },
  image: {
    marginTop: 30,
    width: 150,
    height: 220,
    marginBottom: 40
  },
  text1: {
    textAlign: "center",
    color: "#4B4B4B",
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
    width: 100,
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
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
