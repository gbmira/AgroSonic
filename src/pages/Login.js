import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { client } from "../../Api/index";

const imgBg = "../assets/images/bglogin.png";

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      const response = await client.post(`/api/auth/signin`, values);
      console.log("meu response", response);
      navigation.navigate("Home");
    } catch (error) {
      console.error(`Erro ao realizar o login ${error}`);
    } finally {
      console.log("ta passando aqui");
      setIsLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    login: Yup.string().required("Informe o usuário"),
    senha: Yup.string().required("Informe a senha")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.imageH}
              source={require("../assets/images/logoSlogan.png")}
            />
          </View>

          <View id="inputs-formik">
            <Formik
              initialValues={{ login: "", senha: "" }}
              onSubmit={handleLogin}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                touched,
                errors,
              }) => (
                <>
                  <Text style={styles.text1}>Acesse a sua conta</Text>

                  <TextInput
                    onChangeText={handleChange("login")}
                    value={values.login}
                    style={styles.inputs}
                    placeholder="Usuário"
                    placeholderTextColor="#ffff"
                  />
                  {touched.login && errors.login && (
                    <Text style={styles.errorText}>{errors.login}</Text>
                  )}

                  <TextInput
                    onChangeText={handleChange("senha")}
                    value={values.senha}
                    style={styles.inputs}
                    placeholder="Senha"
                    placeholderTextColor="#ffff"
                    secureTextEntry
                  />
                  {touched.senha && errors.senha && (
                    <Text style={styles.errorText}>{errors.senha}</Text>
                  )}

                  {!isLoading ? (
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                  ) : (
                    <ActivityIndicator />
                  )}
                </>
              )}
            </Formik>
          </View>

          <View style={styles.footer}>
            <Text
              style={styles.textStart}
              onPress={() => navigation.navigate("SignUp")}
            >
              Não possuo uma conta, <Text style={styles.textEnd}>desejo me cadastrar</Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    justifyContent: "center",
    marginBottom: 40,
    height: 130,
    width:320
  },
  imageH: {
    alignSelf: 'center',
    width: 300,
    height: 110,
 
  },
  text1: {
    textAlign: "center",
    color: "#4B4B4B",
    marginBottom: 30,
    fontWeight: "700",
    fontSize: 17,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 2,
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
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16.866,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textStart: {
    textAlign: "center",
    color: "#4B4B4B",
    fontWeight: "700",
    fontSize: 13.866,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 2,
  },
  textEnd: {
    textAlign: "center",
    color: "#4B954C",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});
