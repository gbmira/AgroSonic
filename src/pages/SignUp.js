import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
  } from 'react-native';
  import React, { useState, useEffect, useCallback } from 'react';
  
  
  export default function SignUp ({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
  
    
  
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('/Users/Gabriel/AgroSonicGS/assets/images/planta.png')}
        />
  
        <Text style={styles.texts}>
          Cadastre<Text style={styles.textGreen}>-se</Text>
        </Text>
  
        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputs}
            placeholder="E-mail"
            required
            onChangeText={(email) => setEmail(email)}
          />
  
          <TextInput
            style={styles.inputs}
            placeholder="Nome de usuário"
            required
            onChangeText={(nomeUsuario) => setNomeUsuario(nomeUsuario)}
          />
  
          <TextInput
            style={styles.inputs}
            secureTextEntry
            placeholder="Senha"
            required
            onChangeText={(senha) => setSenha(senha)}
          />
  
          <TextInput
            style={styles.inputs}
            secureTextEntry
            placeholder="Confirmar Senha"
            required
            onChangeText={(confirmaSenha) => setConfirmaSenha(confirmaSenha)}
          />
        </View>
  
        <TouchableOpacity style={styles.button} onPress={this.handleCreateUser}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#A8EFAF',
      flex: 1,
      justifyContent: 'center',
    },
  
    texts: {
      fontSize: 18.74,
      color: '#4B954C',
      fontWeight: 'bold',
      fontStyle: 'normal',
      lineHeight: 60,
      textShadowColor: 'rgba(0, 0, 0, 0.15)',
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 4,
    },
  
    textGreen: {
      color: '#80c054',
    },
  
    image: {
      width: '12.625rem',
      height: "9.313rem",
      marginBottom: '1rem',
    },
  
    inputs: {
      marginTop: '1rem',
      width: '12em',
      textAlign: 'center',
      height: '2.5rem',
      color: '#408241',
      backgroundColor: '#A8EFAF',
      borderRadius: '5vh',
      borderWidth: 3,
      borderColor: '#408241',
      fontSize: 18.74,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      borderRadius: 20,
    },
  
    button: {
      backgroundColor: '#408241',
      marginBottom: '1.5rem',
      marginTop: '1rem',
      width: '6em',
      height: '2.5rem',
      padding: '0.625rem',
      borderRadius: '5vh',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      borderRadius: 20,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  