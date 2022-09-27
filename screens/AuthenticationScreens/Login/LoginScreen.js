import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Button} from "react-native";
import {Formik} from 'formik'
import * as yup from 'yup'


const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})
const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerRight: () => (
                <TouchableOpacity style={{paddingHorizontal: 10}}
                                  onPress={() => navigation.navigate('Register')}><Text>Sign
                    Up</Text></TouchableOpacity>
            ),
        });
    }, []);
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Sign in to your account </Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
            >
                {({handleChange, handleBlur, handleSubmit,errors, values,isValid, touched}) => (
                    <>
                        <TextInput
                            name="email"
                            placeholder="Email Address"
                            style={(errors.email && touched.email) ? styles.errorInput : styles.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        {(errors.email && touched.email) &&
                            <Text style={styles.errorText}>{errors.email}</Text>
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
    errorText:{
        color:"red"
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
    errorInput:{
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
    forgotPassword:{
        color: '#505050',
        paddingVertical:30
    }
});