import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable, Modal, Alert, Image} from "react-native";
import {Formik} from 'formik'
import * as yup from 'yup'
import resetPasswordSuccess from '../../../assets/gifs/success_password_change.gif'


const loginValidationSchema = yup.object().shape({
    password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})
const ResetPasswordScreen = ({navigation}) => {
    const [submitSuccess, setSubmitSuccess] = useState(false)
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerRight: () => (
                <TouchableOpacity style={{paddingHorizontal: 10}}
                                  onPress={() => navigation.navigate('DrawerScreen')}><Text>{''}</Text></TouchableOpacity>
            ),
        });
    }, []);
    const handleSubmitSuccess = () =>{
        setSubmitSuccess(true)
    }
    return (
        <View style={styles.container}>
            { !submitSuccess &&
                <>
                    <Text style={styles.title}>Create new password</Text>
                    <Text style={styles.subtitle}>Password must contain minimum 8 characters, at least 1 upper case, 1 lower case, 1 number and 1 symbol..</Text>
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{password: '', passwordConfirmation:''}}
                        onSubmit={
                            // values => console.log(values)
                            handleSubmitSuccess
                        }
                    >
                        {({handleChange, handleBlur, handleSubmit, errors, values, isValid, touched}) => (
                            <>
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
                                <TextInput
                                    name="passwordConfirmation"
                                    placeholder="passwordConfirmation"
                                    style={
                                        (errors.password && touched.password) ? styles.errorInput : styles.input}
                                    onChangeText={handleChange('passwordConfirmation')}
                                    onBlur={handleBlur('passwordConfirmation')}
                                    value={values.passwordConfirmation}
                                    secureTextEntry
                                />
                                {(errors.passwordConfirmation && touched.passwordConfirmation) &&
                                    <Text style={styles.errorText}>{errors.passwordConfirmation}</Text>
                                }

                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    style={styles.button}
                                    // disabled={!isValid}
                                >
                                    <Text style={styles.buttonText}>Reset Password</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                </>
            }

            { submitSuccess &&
            <>
                <Text style={styles.title}>Success!</Text>
                <Text style={styles.subtitle}>You have reset your password and can now proceed with logging in.</Text>
                    <Image
                        style={styles.forgotPasswordImage}
                        source={resetPasswordSuccess}
                    />
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Login')}
                    style={styles.button}
                    // disabled={!isValid}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </>
            }
        </View>
    );
};

export default ResetPasswordScreen;

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
    forgotPasswordImage: {
        maxWidth: 150,
        height: 150
    },
    button: {
        backgroundColor: "#77ACA2",
        paddingVertical: 15,
        width: "90%",
        marginBottom: 20,
        borderRadius: 9,
        marginTop: 30
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
        paddingTop: 20
    },
    subtitle: {
        fontWeight: "300",
        fontSize: 13,
        color: "#8F8F8F",
        paddingHorizontal: 35,
        textAlign: "center",
        paddingBottom: 20
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: "90%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});