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

import { client } from '../../Api/index'
  
  
  export default function SignUp ({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    
    handleCreateUser = async () => {
      if (!nomeUsuario || !email || !confirmaSenha) {
        alert('Preencha todos os campos!');
      } else {
        if (senha.length < 6) {
          alert('A senha deve ser maior que 6 caracteres!');
        } else {
          if (senha === confirmaSenha) {
            try {
              const response = await client.post("/api/auth/signup", {
                nome: nomeUsuario,
                email: email,
                senha: senha,
                telefone: telefone,
              });
              console.log("Cadastrado com sucesso");
            } catch (error) {
              if (error.response) {
                // Erro de resposta da API (por exemplo, status HTTP de erro)
                console.error("Erro de resposta da API:", error.response.data);
              } else if (error.request) {
                // A solicitação foi feita, mas não houve resposta do servidor
                console.error("Não houve resposta do servidor");
              } else {
                // Outros erros
                console.error("Ocorreu um erro ao cadastrar:", error.message);
              }
        }
      }}}
    };
  
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/planta.png')}
        />
  
        <Text style={styles.texts}>
          Cadastre<Text style={styles.textGreen}>-se</Text>
        </Text>
  
        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputs}
            placeholder="E-mail"
            placeholderTextColor="#408241"
            required
            onChangeText={(email) => setEmail(email)}
          />
  
          <TextInput
            style={styles.inputs}
            placeholder="Nome de usuário"
            placeholderTextColor="#408241"
            required
            onChangeText={(nomeUsuario) => setNomeUsuario(nomeUsuario)}
          />

          <TextInput
            style={styles.inputs}
            placeholder="Telefone"
            placeholderTextColor="#408241"
            required
            onChangeText={(telefone) => setTelefone(telefone)}
          />
  
          <TextInput
            style={styles.inputs}
            secureTextEntry
            placeholder="Senha"
            placeholderTextColor="#408241"
            required
            onChangeText={(senha) => setSenha(senha)}
          />
  
          <TextInput
            style={styles.inputs}
            secureTextEntry
            placeholder="Confirmar Senha"
            placeholderTextColor="#408241"
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
      fontSize: 35.2,
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
      width: 202,
      height: 149.008,
      marginBottom: 16,
    },

    inputs: {
      marginTop: 16,
      width: 192,
      textAlign: 'center',
      height: 40,
      color: '#408241',
      backgroundColor: '#A8EFAF',
      borderRadius: 46.85,
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
      borderRadius: 20,
    },

    button: {
      backgroundColor: '#408241',
      justifyContent: 'center',
      marginBottom: 24,
      marginTop: 16,
      width: 96,
      height: 40,
      borderRadius: 46.85,
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
  