import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Text, View, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Perfil() {
  const { nome, email } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>


        <Image
          style={styles.ImageHome}
          source={require('../assets/images/perfil.png')}
        />

        <View style={styles.boxProfile}>
          <Text style={styles.name}>{nome ? nome : 'Nome de usuário {Null}'}</Text>
          <Text>{email ? email : 'Email {Null}'}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnName}>Editar Perfil</Text>
        </TouchableOpacity>
        {/* <Text>Nome de usuário: {nomeUsuario}</Text>
      <Text>Email: {email}</Text> */}

        <View style={styles.menu}>
          <TouchableOpacity style={styles.Menubutton}>

            <Image
              style={styles.imgIcon}
              source={require('../assets/images/feedback.png')}
            />
            <Text style={styles.texto}>Dar Feedback</Text>
            <Image
              style={styles.seta}
              source={require('../assets/images/seta.png')}
            />


          </TouchableOpacity>
          <TouchableOpacity style={styles.Menubutton}>

            <Image
              style={styles.imgIcon}
              source={require('../assets/images/configuracao.png')}
            />
            <Text style={styles.texto}>Configuracoes</Text>
            <Image
              style={styles.seta}
              source={require('../assets/images/seta.png')}
            />


          </TouchableOpacity>
          <TouchableOpacity style={styles.Menubutton} >

            <Image
              style={styles.imgIcon}
              source={require('../assets/images/sair.png')}
            />
            <Text style={styles.texto} >Sair</Text>
            <Image
              style={styles.seta}
              source={require('../assets/images/seta.png')}
            />


          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    top: 20
  },
  container: {
    alignItems: 'center',
    flex: 1,
    gap: 30,
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%'
  },
  safeArea: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff', // Cor branca com 50% de opacidade

  },
  boxProfile: {
    alignItems: 'center',
    gap: 5
  },
  btnName: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 17,

  },

  name: {
    fontWeight: 'bold',
    fontSize: 18
  },
  ImageHome: {
    width: 200,
    height: 200,
  },
  button: {
    width: 200,
    height: 30,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,

  },

  menu: {
    gap: 15
  },

  Menubutton: {
    width: '85%',
    height: 65,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 50,
    justifyContent: 'space-between'
  },
  imgIcon: {
    marginRight: 15,

    width: 60,
    height: 60
  },
  seta: {
    left: 0,
    width: 30,
    height: 30
  },
  texto: {
    width: 100,
    textAlign: 'center',
  }
})