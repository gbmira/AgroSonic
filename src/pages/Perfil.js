import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import {
    Text,
    View,
    StyleSheet,
  } from "react-native";

export default function Perfil () {
  const { nomeUsuario, email } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text>Nome de usuário: {nomeUsuario}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})