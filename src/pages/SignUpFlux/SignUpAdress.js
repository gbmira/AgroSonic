import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
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
                    <Text style={styles.texts}>Informações Endereço</Text>

                    <Formik initialValues={{ cep: "", localidade: "" }} onSubmit={handleSubmit}>
                        {({ handleChange, handleSubmit, values }) => (
                            <>
                                <View style={styles.inputArea}>
                                    <TextInput
                                        onChangeText={handleChange("cep")}
                                        onBlur={() => handleCEPChange(values.cep)}
                                        value={values.cep || ""} // Certifique-se de que o valor inicial esteja definido ou forneça uma string vazia padrão
                                        style={styles.inputs}
                                        placeholder="Informe seu cep"
                                        placeholderTextColor="#408241"
                                        required
                                    />

                                    <TextInput
                                        onChangeText={handleChange("logradouro")}
                                        value={endereco.logradouro}
                                        style={styles.inputs}
                                        placeholder="Logradouro"
                                        placeholderTextColor="#408241"
                                        editable={false}
                                        required
                                    />

                                    <TextInput
                                        onChangeText={handleChange("bairro")}
                                        value={endereco.bairro}
                                        style={styles.inputs}
                                        placeholder="Bairro"
                                        placeholderTextColor="#408241"
                                        editable={false}
                                        required
                                    />

                                    <TextInput
                                        onChangeText={handleChange("uf")}
                                        value={endereco.uf}
                                        style={styles.inputs}
                                        placeholder="Distrito Federal (UF)"
                                        placeholderTextColor="#408241"
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
        backgroundColor: '#A8EFAF',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texts: {
        fontSize: 30,
        color: '#4B954C',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 60,
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    inputArea: {
        width: '100%',
        alignItems: 'center'
    },
    textGreen: {
        color: '#80c054',
    },
    inputs: {
        marginTop: 16,
        width: 300,
        textAlign: 'center',
        height: 55,
        color: '#408241',
        backgroundColor: '#A8EFAF',
        borderRadius: 16.85,
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
        borderRadius: 3,
    },
    button: {
        marginTop: 16,
        backgroundColor: '#408241',
        justifyContent: 'center',
        width: 200,
        height: 55,
        alignItems: 'center',
        shadowColor: '#000',
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