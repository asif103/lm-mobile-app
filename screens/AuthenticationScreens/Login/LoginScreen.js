import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from "react-native";
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios';
import { BASE_URL } from '../../../config/config';
import { logCurrentStorage, removeItemValue, storeData } from '../../../config/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';


const loginValidationSchema = yup.object().shape({
    userName: yup
        .string()
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})
const LoginScreen = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerRight: () => (
                <TouchableOpacity style={{ paddingHorizontal: 10 }}
                    onPress={() => navigation.navigate('Register')}><Text>Sign
                        Up</Text></TouchableOpacity>
            ),
        });
    }, []);

    const handleLogin = (data) => {

        axios.post(`${BASE_URL}/client/login`, data)
            .then(response => {
                // console.log(response.data.data.user)
                if (response.data.status === 'success') {
                    const user = response.data.data.user;
                    storeData(user, '@activeUser');
                }
            }).catch(err => {
                console.log('error', err)
            });
    }


    useEffect(() => {
        AsyncStorage.getItem('@activeUser')
            .then(res => {
                console.log('activeUser', res);
            });
    }, []);


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Sign in to your account </Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ userName: '', password: '' }}
                onSubmit={values => handleLogin(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, values, isValid, touched }) => (
                    <>
                        <TextInput
                            name="userName"
                            placeholder="Email Address"
                            style={(errors.userName && touched.userName) ? styles.errorInput : styles.input}
                            onChangeText={handleChange('userName')}
                            onBlur={handleBlur('userName')}
                            value={values.userName}
                            keyboardType="username"
                        />
                        {(errors.userName && touched.userName) &&
                            <Text style={styles.errorText}>{errors.userName}</Text>
                        }
                        <TextInput
                            name="password"
                            placeholder="Password"
                            style={
                                (errors.password && touched.password) ? styles.errorInput : styles.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {(errors.password && touched.password) &&
                            <Text style={styles.errorText}>{errors.password}</Text>
                        }
                        <Text style={styles.forgotPassword}
                            onPress={() => navigation.navigate('ForgotPassword')}
                        >Forgot your password?</Text>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.button}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
        backgroundColor: "#ffffff"
    },
    errorText: {
        color: "red"
    },
    button: {
        backgroundColor: "#77ACA2",
        paddingVertical: 15,
        width: "90%",
        marginBottom: 20,
        borderRadius: 9,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 21,
    },
    input: {
        height: 50,
        width: "90%",
        margin: 12,
        backgroundColor: '#F5F5F5',
        /* Shade of primary */
        borderWidth: 1,
        borderColor: "#77ACA2",
        borderRadius: 9,
        padding: 10,
    },
    errorInput: {
        height: 50,
        width: "90%",
        margin: 12,
        backgroundColor: '#F5F5F5',
        /* Shade of primary */
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 9,
        padding: 10,
    },
    forgotPassword: {
        color: '#505050',
        paddingVertical: 30
    }
});