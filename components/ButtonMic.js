import { Text, View, StyleSheet  } from 'react-native';
import { useNavigationState } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons'

export default function ButtonMic({ size, color }) {
  const navigationState = useNavigationState(state => state);

  const isFocused = navigationState.index === navigationState.routeNames.indexOf('Microfone');

  return (
    <View style={[styles.container, { backgroundColor: isFocused ? '#408241' : '#80c054'} ]}>
      <Feather name="mic" size={size} color={isFocused ? '#FFFFFF' : '#DEDEDE'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent:"center",

  }
})