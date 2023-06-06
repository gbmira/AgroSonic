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

            <Text>Conheça mais sobre nossos planos!</Text>

            <View style={styles.areaPlanos}>
                <View style={styles.planos}>
                    <Text style={styles.tipoPlano}>Mensal</Text>
                    <Text style={styles.valorPlano}>R$ 89,90</Text>
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={modalActive}
                        onRequestClose={() => setModalActive(false)}
                    >
                        <View style={styles.outerView}>
                            <View style={styles.modalView}>
                                <View style={styles.textArea}>
                                <Text style={styles.vantagemText}>- Monitoramento contínuo</Text>
                                <Text style={styles.vantagemText}>- Relatórios com Dashboards precisos</Text>
                                <Text style={styles.vantagemText}>- Recomendações personalizadas</Text>
                                <Text style={styles.vantagemText}>- Alertas comunicativos</Text>
                                <Text style={styles.vantagemText}>- Análise e Processamento de até 10 Microfones</Text>
                                </View>
                                <Pressable style={styles.fechaDetalhe} onPress={() => setModalActive(false)}>
                                    <Text>Fechar detalhes</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <View style={styles.detalhes}>
                        <TouchableOpacity style={styles.detalheButton} onPress={() => setModalActive(true)}>
                            <Text style={styles.detalheText}>Consultar detalhes</Text>
                        </TouchableOpacity>
                    </View>           
                </View> 

                <View style={styles.planos}>
                    <Text style={styles.tipoPlano}>Semestral</Text>
                    <Text style={styles.valorPlano}>R$ 321,00</Text>
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={modal2Active}
                        onRequestClose={() => setModal2Active(false)}
                    >
                        <View style={styles.outerView}>
                            <View style={styles.modalView}>
                                <View style={styles.textArea}>
                                <Text style={styles.vantagemText}>- Acesso a especialistas</Text>
                                <Text style={styles.vantagemText}>- Acompanhamento do progresso (Opcional)</Text>
                                <Text style={styles.vantagemText}>- Monitoramento contínuo</Text>
                                <Text style={styles.vantagemText}>- Relatórios com Dashboards precisos</Text>
                                <Text style={styles.vantagemText}>- Recomendações personalizadas</Text>
                                <Text style={styles.vantagemText}>- Alertas comunicativos</Text>
                                <Text style={styles.vantagemText}>- Análise e Processamento de até 100 Microfones</Text>
                                </View>
                                <Pressable style={styles.fechaDetalhe} onPress={() => setModal2Active(false)}>
                                    <Text>Fechar detalhes</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <View style={styles.detalhes}>
                        <TouchableOpacity style={styles.detalheButton} onPress={() => setModal2Active(true)}>
                            <Text style={styles.detalheText}>Consultar detalhes</Text>
                        </TouchableOpacity>
                    </View>          
                </View>

                <View style={styles.planos}>
                    <Text style={styles.tipoPlano}>Anual</Text>
                    <Text style={styles.valorPlano}>R$ 799,90</Text>
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={modal3Active}
                        onRequestClose={() => setModal3Active(false)}
                    >
                        <View style={styles.outerView}>
                            <View style={styles.modalView}>
                                <View style={styles.textArea}>
                                <Text style={styles.vantagemText}>- Acesso a novas pesquisas e desenvolvimentos</Text>
                                <Text style={styles.vantagemText}>- Acompanhamento do progresso (Opcional)</Text>
                                <Text style={styles.vantagemText}>- Monitoramento contínuo</Text>
                                <Text style={styles.vantagemText}>- Acesso a especialistas</Text>
                                <Text style={styles.vantagemText}>- Relatórios com Dashboards precisos</Text>
                                <Text style={styles.vantagemText}>- Recomendações personalizadas</Text>
                                <Text style={styles.vantagemText}>- Alertas comunicativos</Text>
                                <Text style={styles.vantagemText}>- Análise e Processamento de ilimitados microfones</Text>
                                </View>
                                <Pressable style={styles.fechaDetalhe} onPress={() => setModal3Active(false)}>
                                    <Text>Fechar detalhes</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <View style={styles.detalhes}>
                        <TouchableOpacity style={styles.detalheButton} onPress={() => setModal3Active(true)}>
                            <Text style={styles.detalheText}>Consultar detalhes</Text>
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
        height: 400,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    textArea:{
        paddingLeft: 10,
    },

    vantagemText:{
        marginBottom: 15,
    },

    title: {
        alignItems: 'center',
        marginBottom: 5,
    },

    textTitle: {
        fontSize: 30,
        fontWeight: 'bold'
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
        height: 160,
        borderRadius: 20,
        borderColor: '#E4E4E4', // Cor da borda
        backgroundColor: 'white', // Interior transparente
        paddingLeft: 10, // Adicione este estilo para alinhar o texto à esquerda
        shadowColor: '#000',
        shadowOffset:{
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
        color: 'green'
    },

    valorPlano: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    detalhes: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },

    detalheButton: {
        justifyContent: "center",
        width: '70%',
        height: 55,
        borderRadius: 46.85,
        backgroundColor: "#408241",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 20,
    },

    detalheText: {
        textAlign: "center",
        color: "#ffffff",
        fontWeight: "700",
        fontSize: 16.866,
    },

    fechaDetalhe:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
        marginTop: 30
    },
});