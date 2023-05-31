import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';


export default function Login ({ navigation }) {

  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  handleLoginUser = () => {
    auth.signInWithEmailAndPassword(email, senha).then((user) => {
      setUser(user);
      alert('Login efetuado com sucesso!');
      saveUserEmailToStorage();
    }).catch((error) => {
      console.log(error);
      if (error.code === 'auth/user-not-found') {
        alert('Conta não registrada. Cadastre-se! Por favor.');
      } else {
        alert('E-mail ou senha incorretos! Tente novamente, por favor.');
      }
    });
  };

return(
  

<View style={styles.container}>
      
     <View style={styles.header}>

      <Image style={styles.imageH}  source={require('../assets/images/LogoAgroSonic.png')} />

    </View>

      <Text style={styles.text1}>Entre com sua conta!</Text>

      <TextInput style={styles.inputs}
      placeholder="Usuário"
      placeholderTextColor="#408241"
      onChangeText={(email) => setEmail(email)}
      />
          
      <TextInput style={styles.inputs}
        secureTextEntry
        placeholder=" Senha"
        placeholderTextColor="#408241"
        onChangeText={(senha) => setSenha(senha)}
      />

      <TouchableOpacity style={styles.button}  >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>




  <View style={styles.footer}>

    <Text style={styles.textStart} onPress={() => navigation.navigate('SignUp')}>Desejo <Text style={styles.textEnd}>criar uma conta</Text></Text> 
    
    </View>

  </View> );}


 const styles = StyleSheet.create({

  container: {  
    flex: 1,
    backgroundColor: '#A8EFAF',
    alignItems: 'center',
    justifyContent: 'center' },

    header: {
      justifyContent: 'center',
      marginBottom: 40
    },

    imageH: {
      width: 321,
      height: 129,
      shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4,
   },

    text1:{
    textAlign:'center',
    color: '#408241',
    marginBottom: 30,
    fontWeight: "700",
    fontSize: 17,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 2, },

    inputs:{
      textAlign: 'left',
      width: '70%',
      height: 55,
      color: '#408241',
      backgroundColor: '#A8EFAF',
      borderRadius: 46.85,
      borderWidth: 3,
      borderColor: '#408241',
      fontWeight: "700",
      fontSize: 12.866,
      padding: 10,
      marginBottom: 20,
      shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20, },

    button:{
      justifyContent: 'center',
      width: '30%',
      height: 55,
      marginBottom: 30,
      marginTop: 15,
      borderRadius: 46.85,
      backgroundColor: '#408241',
      shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20, },

    buttonText: {
      textAlign: 'center',
      color: '#ffffff',
      fontWeight: "700",
      fontSize: 16.866 },

      footer: {
        alignItems: 'center',
        justifyContent: 'center', },
      
        textStart: {
          textAlign:'center',
          color: '#408241',
          fontWeight: "700",
          fontSize: 13.866,
          textShadowColor: 'rgba(0, 0, 0, 0.15)',
          textShadowOffset: {
            width: 0,
            height: 3,
          },
          textShadowRadius: 2, },

          textEnd: {
            textAlign:'center',
            color: '#ffffff',
            fontWeight: "700", },
    
  });