import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Grafico() {

    const dataTomate = [0, 10, 0, 0, 0, 15, 0, 0, 0, 0, 5, 0, 0, 0, 20, 0, 0, 0, 0]
    const dataLaranja = [0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0]
    const dataMilho = [0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0]
    

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.areaTitle}>
                    <Text style={styles.title}>Dashboard</Text>
                </View>
                <View style={styles.graficoContainer}>
                    <View style={styles.areaGrafico}>
                        <View style={styles.areaGraficoNome}>
                            <Text style={styles.graficoNome}>Plantação de Laranja</Text>
                            <Text style={styles.graficoText}>Confira como está a saúde de sua plantação:</Text>
                        </View>
                        <LineChart
                            style={styles.grafico}
                            data={dataLaranja}
                            svg={{ stroke: 'green' }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                            <Grid />
                        </LineChart>
                        <View style={styles.areaStatus}>
                            <Text style={styles.statusText}>Status: Saudável</Text>
                        </View>
                    </View>

                    <View style={styles.areaGrafico}>
                        <View style={styles.areaGraficoNome}>
                            <Text style={styles.graficoNome}>Plantação de Tomate</Text>
                            <Text style={styles.graficoText}>Confira como está a saúde de sua plantação:</Text>
                        </View>
                        <LineChart
                            style={styles.grafico}
                            data={dataTomate}
                            svg={{ stroke: 'green' }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                            <Grid />
                        </LineChart>
                        <View style={styles.areaStatus}>
                            <Text style={styles.statusTextRed}>Status: Desidratada</Text>
                            <Text style={styles.statusTextRed}>Alerta: Vá ao setor 03 e hidrate sua plantação</Text>
                        </View>
                    </View>

                    <View style={styles.areaGrafico}>
                        <View style={styles.areaGraficoNome}>
                            <Text style={styles.graficoNome}>Plantação de Milho</Text>
                            <Text style={styles.graficoText}>Confira como está a saúde de sua plantação:</Text>
                        </View>
                        <LineChart
                            style={styles.grafico}
                            data={dataMilho}
                            svg={{ stroke: 'green' }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                            <Grid />
                        </LineChart>
                        <View style={styles.areaStatus}>
                            <Text style={styles.statusText}>Status: Saudável</Text>
                        </View>
                    </View>

                    <View style={styles.areaPlus}>
                        <TouchableOpacity onPress={() => alert("Serviço temporáriamente indisponível.")}>
                        <Entypo name="plus" size={45} color="white"></Entypo>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.footer}>
                <Text>© 2023 - Todos os direitos reservados.</Text>
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
        backgroundColor: 'white',
        justifyContent: 'center',
        flexGrow: 1,
    },

    areaTitle: {
        marginBottom: 20,
        marginTop: 20
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    graficoContainer: {
        gap: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    areaGraficoNome: {
        width: '100%',
        marginTop: 20
    },

    areaGrafico: {
        width: '90%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    grafico: {
        width: '90%',
        height: 150
    },

    graficoNome: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green'
    },

    graficoText: {
        fontSize: 14,
        color: 'black',
        paddingLeft: 10,
    },

    areaStatus: {
        width: '100%',
        marginBottom: 20
    },

    statusText: {
        fontSize: 14,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: 'green'
    },

    statusTextRed: {
        fontSize: 14,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: 'red'
    },

    areaPlus: {
        width: 45,
        backgroundColor: 'green',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 200,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    footer:{
        alignItems: 'center',
        width: '100%',
        height: 50,
        marginTop: 50
    }

});