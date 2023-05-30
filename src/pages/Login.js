import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';


export default function Login ({ navigation }) {

  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


return(
  

<View style={styles.container}>
      
     <View style={styles.header}>

      <Image style={styles.imageH}  source={require('/Users/Gabriel/AgroSonicGS/assets/images/LogoAgroSonic.png')} />

    </View>

      <Text style={styles.text1}>Entre com sua conta!</Text>

      <TextInput style={styles.inputs}
      placeholder="Usuário"
      onChangeText={(email) => setEmail(email)}
      />
          
      <TextInput style={styles.inputs}
        secureTextEntry
        placeholder=" Senha"
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

  text1: {
    textAlign:'center',
    color: '#408241',
    marginBottom: '1.5vh',
    fontWeight: "700",
    fontSize: 18.74,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4, },

  inputs: {
    textAlign: 'center',
    width: '70vw',
    height: '6vh',
    color: '#408241',
    backgroundColor: '#A8EFAF',
    margin: '1.5vh',
    borderRadius: '5vh',
    borderWidth: 3,
    borderColor: '#408241',
    fontWeight: "700",
    fontSize: 18.74,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20, },

  button: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginTop: '2.5vh',
    margin: '2.5vh',
    marginRight: 'auto',
    width: '30vw',
    height: '6vh',
    borderRadius: '5vh',
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
    fontSize: 18.74 },

      header: {
    marginTop: '4vh',
    marginBottom: '2vh', },

   imageH:{
     width: "16.875rem",
     height: "6.75rem",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4,
   },

   footer: {
    marginTop: '2vh',
    marginBottom: '2vh',
    alignItems: 'center',
    justifyContent: 'center', },
  
  textStart: {
    textAlign:'center',
    color: '#408241',
    marginBottom: '4vh',
    fontWeight: "700",
    fontSize: 18.74,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4, },

  textEnd: {
    textAlign:'center',
    color: '#ffffff',
    marginBottom: 'vh',
    fontWeight: "700",
    fontSize: 18.74 },
    

  });