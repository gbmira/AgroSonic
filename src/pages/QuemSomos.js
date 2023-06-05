import { Dimensions, Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, ScrollView, SafeAreaView } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function QuemSomos() {


    return (
        <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageArea}>
          <TouchableOpacity onPress={() => alert("home")}>
            <Image style={styles.imageH} source={require('../assets/images/LogoAgroSonic.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.initialTexts}>
          <Text style={styles.mainText}>Quem somos nós?</Text>

          <Text style={styles.texts}>
            A <Text style={styles.textAgro}>Agro</Text><Text style={styles.textSonic}>Sonic</Text> é uma empresa nacional que nasceu em 2023.
          </Text>

          <Text style={styles.texts}>
            Através da utilização de tecnologias avançadas, como inteligência artificial generativa, internet das coisas e microfones ultrassônicos, torna-se possível mapear através do som padrões emitidos pelo plantio sobre a sua saúde, desidratação, desnutrição e ataque de pragas.
          </Text>

          <Text style={styles.texts}>
            A solução identifica problemas invisíveis a olho nu que afetam a qualidade e o desenvolvimento do cultivo, nosso aplicativo pode ser acessado em tempo real por qualquer dispositivo móvel.
          </Text>
        </View>

        <Image style={styles.imageQS} source={require('../assets/images/somplanta.jpg')} />

        <View style={styles.finalTexts}>
          <Text style={styles.textsFinal}>
            A <Text style={styles.textAgro}>Agro</Text><Text style={styles.textSonic}>Sonic</Text> visa atender tanto grandes quanto pequenos produtores, oferecendo um plano de assinatura com acesso a um aplicativo integrado que oferece modelos precisos e indicações sobre as necessidades de cada cultivo.
          </Text>

          <Text style={styles.textsFinal}>
            E uma inteligência artificial generativa é capaz de monitorar continuamente a qualidade do plantio aumentando sua produtividade e evitando desperdícios.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: 'white', // Cor branca com 50% de opacidade
      },

    container: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        flexGrow: 1,
    },

    imageArea: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        backgroundColor: '#F0F0F0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },

    imageH: {
        width: 270,
        margin: 16,
        height: 108,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 4,
    },
    
    initialTexts: {
        flex: 1,
        width: '80%',
        margin: 16,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    mainText: {
        fontSize: 27,
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: 27,
        color: '#4B4B4B',
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },


    texts: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        width: '90%',
        color: 'black',
    },

    imageQS: {
        width: windowWidth * 1,
                height: windowHeight * 0.3,
                marginTop: 10,
    },

    finalTexts: {
        flex: 1,
        marginTop: 30,
        margin: 16,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textsFinal: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 16,
        width: '90%',
        color: 'black',
    },

    textAgro: {
        color: '#4b954c',
        fontWeight: 'bold',
    },

    textSonic: {
        color: '#80c054',
        fontWeight: 'bold',
    },



});