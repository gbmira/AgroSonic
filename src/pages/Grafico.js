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

                    <Text style={styles.title}>Dashboard Analítico</Text>

                </View>

                <View style={styles.graficoContainer}>

                    <View style={styles.areaGrafico}>

                        <View style={styles.areaGraficoNome}>

                            <Text style={styles.graficoNome}>Plantação de Laranja</Text>

                             

                            <Text style={styles.graficoText}>Confira como está a saúde da sua plantação</Text>

                            

                            <Text style={styles.graficoHora}>Valores medidos na última hora...</Text>

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

                             

                            <Text style={styles.graficoText}>Confira como está a saúde da sua plantação</Text>

                             

                            <Text style={styles.graficoHora}>Valores medidos na última hora...</Text>

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

                            <Text style={styles.statusTextRed}>Alerta: Vá ao setor 03 e hidrate a sua plantação</Text>

                             

                            <Text style={styles.graficoHora}>Valores medidos na última hora</Text>

                        </View>

                    </View>




                    <View style={styles.areaGrafico}>

                        <View style={styles.areaGraficoNome}>

                            <Text style={styles.graficoNome}>Plantação de Milho</Text>

                             

                            <Text style={styles.graficoText}>Confira como está a saúde da sua plantação</Text>

                             

                            <Text style={styles.graficoHora}>Valores medidos na última hora...</Text>

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

                        <TouchableOpacity onPress={() => alert("Aqui você poderá adicionar uma nova espécie de plantas.")}>

                        <Entypo name="plus" size={45} color="white"></Entypo>

                        </TouchableOpacity>

                    </View>




                </View>




                <View style={styles.footer}>

                <Text>© AgroSonic 2023 - Todos os direitos reservados.</Text>

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

        fontSize: 25,

        fontWeight: 'bold',

        textAlign: 'center',

        color: "#408241",

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

        flex: 1,

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

        elevation: 5,

    },




    grafico: {

        width: '90%',

        height: 150

    },




    graficoNome: {

        paddingLeft: 10,

        fontSize: 20,

        fontWeight: 'bold',

        color: '#408241',

        textAlign: 'center',

    },




    graficoText: {

        fontSize: 11,

        color: 'black',

        paddingLeft: 10,

        textAlign: 'center',

    },




    graficoHora: {

        fontSize: 11,

        color: 'black',

        paddingLeft: 10,

        textAlign: 'center',

    },




    areaStatus: {

        width: '100%',

        marginBottom: 20

    },




    statusText: {

        fontSize: 14,

        paddingLeft: 10,

        fontWeight: 'bold',

        color: '#408241',

        textAlign: 'center',

    },




    statusTextRed: {

        fontSize: 14,

        paddingLeft: 10,

        fontWeight: 'bold',

        color: 'red',

        textAlign: 'center',

    },




    areaPlus: {

        width: 45,

        backgroundColor: '#408241',

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

        marginTop: 40,

        color: '#408241'

    }

});