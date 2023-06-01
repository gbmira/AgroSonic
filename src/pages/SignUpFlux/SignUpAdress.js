import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { Formik } from "formik";
import { client } from "../../../Api/index";

export default function SignUpAdress({ navigation, route }) {

    console.log(route.params.values)

    const [endereco, setEndereco] = useState({
        logradouro: "",
        bairro: "",
        uf: ""
    });

    const mergedObj = { ...route.params.values, ...endereco };
    console.log(mergedObj)

    const [userData, setUserData] = useState({
        nome: "",
        telefone: "",
        cpf: "",
        email: "",
        senha: "",
        endereco: [
          {
            cep: "",
            logradouro: "",
            bairro: "",
            localidade: "",
            uf: ""
          }
        ],
        roles: [
          {
            nome: "ROLE_USER"
          }
        ]
      });

    const handleCEPChange = async (cep) => {
        try {
            console.log(cep)
            const response = await client.get(`/api/consultaCEP/${cep}`);
           
            if (response.status === 200) {
                const data = JSON.stringify(response.data)
                setEndereco({
                    logradouro: response.data.logradouro,
                    bairro: response.data.bairro,
                    uf: response.data.uf
                });
                console.log(endereco)
            } else {
                console.error('Erro ao consultar CEP');
            }
        } catch (error) {
            console.error('Erro ao consultar CEP', error);
        }
    };

    const handleSubmit = async (mergedObj) => {
        console.log(`Objeto Formatado: ${JSON.stringify(mergedObj)}`)

        // const response = await client.post(`/api/auth/signin`, values);
        // console.log("meu response", response);


        // if (senha.length < 6) {
        //   alert('A senha deve ser maior que 6 caracteres!');
        // } else {
        //   if (senha === confirmaSenha) {
        //   }
        // }
    }


    const { nome, email, telefone } = route.params.values;

    return (
        <View style={styles.container}>
            <Text style={styles.texts}>
                Informações Endereço
            </Text>

            <Image
                style={styles.image}
                source={require('../../assets/images/planta.png')}
            />

            <Formik initialValues={{ cep: "" }} onSubmit={handleSubmit}>
                {(
                    { handleChange, handleSubmit, values }
                ) => (
                    <>
                        <View style={styles.inputArea}>
                            <TextInput
                                onChangeText={handleChange("cep")}
                                onBlur={() => handleCEPChange(values.cep)}
                                value={endereco.cep}
                                style={styles.inputs}
                                placeholder="Informe seu cep"
                                placeholderTextColor="#408241"
                                required
                            />
                            <TextInput
                                onChangeText={handleChange("logradouro")}
                                value={endereco.logradouro}
                                //value={values.logradouro}
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


                            {/*   
          <TextInput
          style={styles.inputs}
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor="#408241"
          required
          onChangeText={(senha) => setSenha(senha)}
          />
          
          <TextInput
          style={styles.inputs}
          secureTextEntry
          placeholder="Confirmar Senha"
          placeholderTextColor="#408241"
          required
          onChangeText={(confirmaSenha) => setConfirmaSenha(confirmaSenha)}
        /> */}

                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Avançar</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#A8EFAF',
        flex: 1,
        justifyContent: 'center',
    },

    texts: {
        fontSize: 25.2,
        bottom: 90,
        color: '#4B954C',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 60,
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    inputArea: {
        alignItems: 'center',
        width: '80%'


    },

    textGreen: {
        color: '#80c054',
    },

    image: {
        width: 202,
        height: 149.008,
        bottom: 65

    },

    inputs: {
        marginTop: 16,
        width: '100%',
        textAlign: 'center',
        height: 50,
        bottom: 30,
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
        backgroundColor: '#408241',
        justifyContent: 'center',
        top: 40,
        width: '100%',
        height: 40,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 10,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});