import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable, Modal, Alert, Image} from "react-native";
import {Formik} from 'formik'
import * as yup from 'yup'
import forgotPassword from '../../../assets/gifs/forgot_password.gif'


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
const ForgotPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerRight: () => (
                <TouchableOpacity style={{paddingHorizontal: 10}}
                                  onPress={() => navigation.navigate('DrawerScreen')}><Text>{''}</Text></TouchableOpacity>
            ),
        });
    }, []);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            style={styles.forgotPasswordImage}
                            source={forgotPassword}
                        />
                        <Text style={styles.modalText}>A link has been sent to the Link Me registered
                            email address with instructions for resetting your
                            password.</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.buttonText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.title}>Forgot your password?</Text>
            <Text style={styles.subtitle}>No worries! Enter your email address and a recovery link will be sent to your
                email shortly.</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{email: ''}}
                onSubmit={
                    values => console.log(values)
                    // () => setModalVisible(true)
                }
            >
                {({handleChange, handleBlur, handleSubmit, errors, values, isValid, touched}) => (
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

                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={styles.button}
                            // disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default ForgotPasswordScreen;

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
    forgotPasswordImage:{
        maxWidth:150,
        height:150
    },
    button: {
        backgroundColor: "#77ACA2",
        paddingVertical: 15,
        width: "90%",
        marginBottom: 20,
        borderRadius: 9,
        marginTop:30
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
        paddingTop:20
    },
    subtitle: {
        fontWeight: "300",
        fontSize: 13,
        color: "#8F8F8F",
        paddingHorizontal:35,
        textAlign:"center",
        paddingBottom:20
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
        width:"90%",
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