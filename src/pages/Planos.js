import { useState } from 'react';

import { Text, View, StyleSheet, TouchableOpacity, Modal, Pressable, SafeAreaView } from 'react-native';




export default function Planos() {

    const [modalActive, setModalActive] = useState(false)

    const [modal2Active, setModal2Active] = useState(false)

    const [modal3Active, setModal3Active] = useState(false)




    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Planos</Text>
                </View>




                <Text style={styles.texto}>Conheça mais sobre nossos planos!</Text>
                <View style={styles.areaPlanos}>
                    <View style={styles.planos}>
                        <Text style={styles.tipoPlano}>Mensal</Text>
                        <Text style={styles.valorPlano}>R$ 999</Text>
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={modalActive}
                            onRequestClose={() => setModalActive(false)}
                        >
                            <View style={styles.outerView}>
                                <View style={styles.modalView}>
                                    <View style={styles.textArea}>
                                        <Text style={styles.vantagemText}>✔️ App Integrado com IA generativa </Text>
                                        <Text style={styles.vantagemText}>✔️ Integração com a Base de Dados </Text>
                                        <Text style={styles.vantagemText}>✔️ Alertas Personalizados </Text>
                                        <Text style={styles.vantagemText}>✔️ Visualização de Relatórios com Gráficos </Text>
                                        <Text style={styles.vantagemText}>✔️ Análise e Processamento de até 10 Microfones </Text>
                                        <Text style={styles.vantagemExtra}>_____________________________________________</Text>
                                        <Text style={styles.vantagemExtra}>*Valor adicional de Análise e Processamento por Microfone  </Text>
                                        <Text style={styles.vantagemPrice}>R$79,90 </Text>
                                        <Text style={styles.vantagemExtra}>_____________________________________________</Text>
                                        <Text style={styles.vantagemExtra}>**Para acesso a planos personalizados e projetos de larga escala entre em contato</Text>
                                        <Text style={styles.vantagemExtra}>**A Implantação e Manutenção dos sistemas de Microfonia é de responsabilidade do contratante </Text>
                                    </View>
                                    <Pressable style={styles.fechaDetalhe} onPress={() => setModalActive(false)}>
                                        <Text style={styles.fecharModal}>Voltar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>

                        <View style={styles.detalhes}>
                            <TouchableOpacity style={styles.detalheButton} onPress={() => setModalActive(true)}>
                                <Text style={styles.detalheText}>Saiba mais...</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.planos}>
                        <Text style={styles.tipoPlano}>Semestral</Text>
                        <Text style={styles.valorPlano}>R$ 899</Text>
                        <Text style={styles.valorMensalidade}>6 parcelas iguais</Text>
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={modal2Active}
                            onRequestClose={() => setModal2Active(false)}
                        >
                            <View style={styles.outerView}>
                                <View style={styles.modalView}>
                                    <View style={styles.textArea}>
                                        <Text style={styles.vantagemText}>✔️ App Integrado com IA generativa </Text>
                                        <Text style={styles.vantagemText}>✔️ Integração com a Base de Dados </Text>
                                        <Text style={styles.vantagemText}>✔️ Alertas Personalizados </Text>
                                        <Text style={styles.vantagemText}>✔️ Visualização de Relatórios com Gráficos </Text>
                                        <Text style={styles.vantagemText}>✔️ Análise e Processamento de até 30 Microfones </Text>
                                        <Text style={styles.vantagemExtra}>_____________________________________________</Text>
                                        <Text style={styles.vantagemExtra}>*Valor adicional de Análise e Processamento por Microfone  </Text>
                                        <Text style={styles.vantagemPrice}>R$69,90 </Text>
                                        <Text style={styles.vantagemExtra}>_____________________________________________</Text>
                                        <Text style={styles.vantagemExtra}>**Para acesso a planos personalizados e projetos de larga escala entre em contato</Text>
                                        <Text style={styles.vantagemExtra}>**A Implantação e Manutenção dos sistemas de Microfonia é de responsabilidade do contratante </Text>
                                    </View>
                                    <Pressable style={styles.fechaDetalhe} onPress={() => setModal2Active(false)}>
                                        <Text style={styles.fecharModal}>Voltar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>

                        <View style={styles.detalhes}>
                            <TouchableOpacity style={styles.detalheButton} onPress={() => setModal2Active(true)}>
                                <Text style={styles.detalheText}>Saiba mais...</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.planos}>
                        <Text style={styles.tipoPlano}>Anual</Text>
                        <Text style={styles.valorPlano}>R$ 799</Text>
                        <Text style={styles.valorMensalidade}>12 parcelas iguais</Text>
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={modal3Active}
                            onRequestClose={() => setModal3Active(false)}
                        >
                            <View style={styles.outerView}>
                                <View style={styles.modalView}>
                                    <View style={styles.textArea}>
                                        <Text style={styles.vantagemText}>✔️ App Integrado com IA generativa </Text>
                                        <Text style={styles.vantagemText}>✔️ Integração com a Base de Dados </Text>
                                        <Text style={styles.vantagemText}>✔️ Alertas Personalizados </Text>
                                        <Text style={styles.vantagemText}>✔️ Visualização de Relatórios com Gráficos </Text>
                                        <Text style={styles.vantagemText}>✔️ Análise e Processamento de até 60 Microfones </Text>
                                        <Text style={styles.vantagemExtra}>_____________________________________________</Text>
                                        <Text style={styles.vantagemExtra}>*Valor adicional de Análise e Processamento por Microfone  </Text>
                                        <Text style={styles.vantagemPrice}>R$59,90 </Text>
                                        <Text style={styles.vantagemExtra}>_____________________________________________</Text>
                                        <Text style={styles.vantagemExtra}>**Para acesso a planos personalizados e projetos de larga escala entre em contato</Text>
                                        <Text style={styles.vantagemExtra}>**A Implantação e Manutenção dos sistemas de Microfonia é de responsabilidade do contratante </Text>
                                    </View>
                                    <Pressable style={styles.fechaDetalhe} onPress={() => setModal3Active(false)}>
                                        <Text style={styles.fecharModal}>Voltar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <View style={styles.detalhes}>
                            <TouchableOpacity style={styles.detalheButton} onPress={() => setModal3Active(true)}>
                                <Text style={styles.detalheText}>Saiba mais...</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );

}




const styles = StyleSheet.create({




    safeArea: {

        flex: 1,

        backgroundColor: 'white', // Cor branca com 50% de opacidade

    },




    container: {

        alignItems: 'center',

        justifyContent: 'center',

        backgroundColor: '#FFFFFF',

        justifyContent: 'center',

        flexGrow: 1,

    },




    outerView: {

        flex: 1,

        justifyContent: 'center',

        alignItems: 'center',

        backgroundColor: '#f0f0f0'

    },




    modalView: {

        width: '90%',

        height: 'auto',

        backgroundColor: 'white',

        alignItems: 'center',

        justifyContent: 'center',

        borderRadius: 30,

        shadowColor: '#000',

        shadowOffset: {

            width: 0,

            height: 2

        },

        shadowOpacity: 0.25,

        shadowRadius: 4,

        elevation: 5

    },




    textArea: {

        paddingLeft: 10,
        margin: 20

    },




    vantagemText: {

        marginBottom: 10,

        fontWeight: 'bold',



        color: '#408241',



    },




    vantagemExtra: {

        marginTop: 10,

        marginBottom: 5,

        fontSize: 12,

        textAlign: 'center'

    },




    vantagemPrice: {




        marginBottom: 10,

        fontSize: 20,

        fontWeight: 'bold',

        textAlign: 'center',

        color: '#408241'

    },




    title: {

        alignItems: 'center',

        marginBottom: 5,

    },




    textTitle: {

        fontSize: 30,

        fontWeight: 'bold',

        marginBottom: 10,

        color: '#408241'

    },

    texto: {
        marginBottom: 20,
        textAlign: "center",
        color: "#4B4B4B",
        marginBottom: 30,
        fontWeight: "700",
        fontSize: 17,

    },



    
    areaPlanos: {

        width: '100%',

        marginTop: 40,

        height: 500,

        gap: 30,

        alignItems: 'center',

        justifyContent: 'center',

        marginBottom: 50,

    },




    planos: {

        justifyContent: 'center',

        width: '70%',

        height: 170,

        borderRadius: 20,

        borderColor: '#E4E4E4', // Cor da borda

        backgroundColor: '#f3f0f0', // Interior transparente

        shadowColor: '#000',

        shadowOffset: {

            width: 0,

            height: 2

        },

        shadowOpacity: 0.25,

        shadowRadius: 4,

        elevation: 5

    },




    tipoPlano: {

        fontSize: 18,

        fontWeight: 'bold',

        color: 'green',

        marginLeft: 10, // Adicione este estilo para alinhar o texto à esquerda,

        textAlign: 'center',



    },




    valorPlano: {

        fontSize: 30,

        fontWeight: 'bold',

        marginLeft: 10, // Adicione este estilo para alinhar o texto à esquerda

        textAlign: 'center',

    },




    valorMensalidade: {

        fontSize: 10,

        marginLeft: 10, // Adicione este estilo para alinhar o texto à esquerda

        textAlign: 'center',



    },




    detalhes: {

        marginTop: 20,

        width: '100%',

        alignItems: 'center',



    },




    detalheButton: {

        justifyContent: "center",

        alignItems: "center",

        width: '55%',

        height: 40,

        borderRadius: 46.85,

        backgroundColor: "#408241",

        shadowColor: "#000",

        shadowOffset: {

            width: 0,

            height: 4,

        },

        shadowOpacity: 0.25,

        shadowRadius: 4,

        borderRadius: 10,

    },




    detalheText: {

        textAlign: "center",

        color: "#ffffff",

        fontWeight: "400",

        fontSize: 14.866,





    },



    fecharModal : {
        color: '#FFFF',
    },


    fechaDetalhe: {

        backgroundColor: '#4b954c',

        marginBottom: 20,

        padding: 10,

        borderRadius: 20,

        marginTop: 30,

        shadowColor: "#000",

        shadowOffset: {

            width: 0,

            height: 4,

        },

        shadowOpacity: 0.25,

        shadowRadius: 4,



    },

});