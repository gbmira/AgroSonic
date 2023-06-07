import React, { useState } from 'react';
import { Text, View,Image, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import { client } from '../../../Api/index';
import * as Yup from 'yup';

export default function SignUpAdress({ navigation, route }) {

    const [isLoading, setIsLoading] = useState(false);

    const [endereco, setEndereco] = useState({
        logradouro: "",
        bairro: "",
        uf: "",
        localidade: "Brasil"
    });

    const handleCEPChange = async (cep) => {
        try {
            const response = await client.get(`/api/consultaCEP/${cep}`);

            if (response.status === 200) {
                setEndereco({
                    logradouro: response.data.logradouro,
                    bairro: response.data.bairro,
                    uf: response.data.uf
                });
            } else {
                console.error('Erro ao consultar CEP');
            }
        } catch (error) {
            console.error('Erro ao consultar CEP', error);
        }
    };

    const handleSubmit = async (values) => {
        const mergedObj = { ...route.params.values, ...endereco, cep: values.cep };
        console.log(mergedObj);

        const userData = {
            nome: mergedObj.nome,
            telefone: mergedObj.telefone,
            cpf: mergedObj.cpf,
            email: mergedObj.email,
            senha: mergedObj.senha,
            endereco: [
                {
                    logradouro: mergedObj.logradouro,
                    cep: mergedObj.cep,
                    bairro: mergedObj.bairro,
                    localidade: mergedObj.bairro,
                    uf: mergedObj.uf
                }
            ],
            roles: [
                {
                    nome: "ROLE_USER"
                }
            ]
        };

        try {
            setIsLoading(true);
            const response = await client.post(`/api/auth/signup`, userData);
            console.log("meu response", response.data);
            navigation.navigate('Login')

        } catch (error) {
            console.error(`Erro ao realizar o Cadastro ${error}`);
        } finally {
            console.log("ta passando aqui");
            setIsLoading(false);
        }

        console.log("Objeto usuario: ", userData);

        // Resto do código...
    };

    const { nome, email, telefone } = route.params.values;

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <Image style={styles.image} source={require('../../assets/images/iconCasa.png')} />
                    <Text style={styles.texts}>Informe o seu endereço</Text>

                    <Formik initialValues={{ cep: "", localidade: "" }} onSubmit={handleSubmit}>
                        {({ handleChange, handleSubmit, values }) => (
                            <>
                                <View style={styles.inputArea}>
                                    <TextInput
                                        onChangeText={handleChange("cep")}
                                        onBlur={() => handleCEPChange(values.cep)}
                                        value={values.cep || ""} // Certifique-se de que o valor inicial esteja definido ou forneça uma string vazia padrão
                                        style={styles.inputs}
                                        placeholder="CEP"
                                        placeholderTextColor="#ffff"
                                        required
                                    />

                                    <TextInput
                                        onChangeText={handleChange("logradouro")}
                                        value={endereco.logradouro}
                                        style={styles.inputs}
                                        placeholder="Endereço"
                                        placeholderTextColor="#ffff"
                                        editable={false}
                                        required
                                    />

                                    <TextInput
                                        onChangeText={handleChange("bairro")}
                                        value={endereco.bairro}
                                        style={styles.inputs}
                                        placeholder="Bairro"
                                        placeholderTextColor="#ffff"
                                        editable={false}
                                        required
                                    />

                                    <TextInput
                                        onChangeText={handleChange("uf")}
                                        value={endereco.uf}
                                        style={styles.inputs}
                                        placeholder="Estado"
                                        placeholderTextColor="#ffff"
                                        editable={false}
                                        required
                                    />

                                    {!isLoading ? (
                                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                            <Text style={styles.buttonText}>Avançar</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <ActivityIndicator />
                                    )}
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFF',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginTop: 30,
        width: 200,
        height: 190,
        marginBottom: 40
      },
    texts: {
        textAlign: "center",
        color: "#4B4B4B",
        marginBottom: 30,
        fontWeight: "700",
        fontSize: 17,

    },
    inputArea: {
        width: '100%',
        alignItems: 'center'
    },
    textGreen: {
        color: '#80c054',
    },
    inputs: {
        marginBottom: 25,
        textAlign: "center",
        width: 250,
        height: 44,
        color: "white",
        backgroundColor: "#80C053",
        borderRadius: '20px',
        borderWidth: 3,
        borderColor: "#80C053",
        fontWeight: "700",
        fontSize: 12.866,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },

        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, // para adicionar sombra no Android
        borderRadius: 20,
    },
    button: {
        alignSelf: 'center',
        justifyContent: "center",
        width: 100,
        height: 40,
        marginBottom: 30,
        marginTop: 15,
        borderRadius: 46.85,
        backgroundColor: "#4B954C",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});