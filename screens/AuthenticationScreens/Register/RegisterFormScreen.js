import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable, Button } from "react-native";
import { Formik } from 'formik'
import * as yup from 'yup'
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import forgotPassword from "../../../assets/gifs/forgot_password.gif";
import CustomModal from "../../../components/shared/CustomModal/CustomModal";
import PinModal from "../../../components/shared/PinModal/PinModal";
import TOCModal from "../../../components/shared/CustomModal/TOCModal";
import PPModal from "../../../components/shared/CustomModal/PPModal";
import axios from 'axios';
import { BASE_URL } from '../../../config/config';
import { storeData } from '../../../config/utils';

// { "config": { "adapter": ["xhr", "http"], "data": "{\"firstName\":\"Test\",\"lastName\":\"User\",\"phone\":\"01782674689\",\"email\":\"testtest2@gmail.com\",\"password\":\"123456789\",\"postCode\":\"123456789\",\"userName\":\"test13\",\"dateOfBirth\":\"1993-01-18T00:00:00.000Z\"}", "env": { "Blob": [Function Blob], "FormData": [Function FormData] }, "headers": [Object], "maxBodyLength": -1, "maxContentLength": -1, "method": "post", "timeout": 0, "transformRequest": [[Function transformRequest]], "transformResponse": [[Function transformResponse]], "transitional": { "clarifyTimeoutError": false, "forcedJSONParsing": true, "silentJSONParsing": true }, "url": "http://3.104.104.190:3030/api/v1/client/signup", "validateStatus": [Function validateStatus], "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN" }, "data": { "data": { "client": [Object] }, "status": "success", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWM4OWUyNGFlN2E3NDMxOGMwMTAwMSIsImlhdCI6MTY3MjI1MTg3NSwiZXhwIjoxNjc3NDM1ODc1fQ.6zhWG7VeDf5tKHATlzDCLC0NV8vqd5uHVW7eR2DNluE" }, "headers": { "access-control-allow-origin": "*", "connection": "keep-alive", "content-length": "471", "content-type": "application/json; charset=utf-8", "date": "Wed, 28 Dec 2022 18:24:35 GMT", "etag": "W/\"1d7-wJcjTY0i2uZnR/PpqKtd3OMb4xo\"", "keep-alive": "timeout=5", "x-powered-by": "Express" }, "request": { "DONE": 4, "HEADERS_RECEIVED": 2, "LOADING": 3, "OPENED": 1, "UNSENT": 0, "_aborted": false, "_cachedResponse": undefined, "_hasError": false, "_headers": { "accept": "application/json, text/plain, */*", "content-type": "application/json" }, "_incrementalEvents": false, "_lowerCaseResponseHeaders": { "access-control-allow-origin": "*", "connection": "keep-alive", "content-length": "471", "content-type": "application/json; charset=utf-8", "date": "Wed, 28 Dec 2022 18:24:35 GMT", "etag": "W/\"1d7-wJcjTY0i2uZnR/PpqKtd3OMb4xo\"", "keep-alive": "timeout=5", "x-powered-by": "Express" }, "_method": "POST", "_perfKey": "network_XMLHttpRequest_http://3.104.104.190:3030/api/v1/client/signup", "_performanceLogger": { "_closed": false, "_extras": [Object], "_pointExtras": [Object], "_points": [Object], "_timespans": [Object] }, "_requestId": null, "_response": "{\"status\":\"success\",\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWM4OWUyNGFlN2E3NDMxOGMwMTAwMSIsImlhdCI6MTY3MjI1MTg3NSwiZXhwIjoxNjc3NDM1ODc1fQ.6zhWG7VeDf5tKHATlzDCLC0NV8vqd5uHVW7eR2DNluE\",\"data\":{\"client\":{\"firstName\":\"Test\",\"lastName\":\"User\",\"email\":\"testtest2@gmail.com\",\"phone\":\"01782674689\",\"userName\":\"test13\",\"dateOfBirth\":\"1993-01-18T00:00:00.000Z\",\"postCode\":\"123456789\",\"verified\":false,\"status\":\"active\",\"_id\":\"63ac89e24ae7a74318c01001\",\"__v\":0}}}", "_responseType": "", "_sent": true, "_subscriptions": [], "_timedOut": false, "_trackingName": "unknown", "_url": "http://3.104.104.190:3030/api/v1/client/signup", "readyState": 4, "responseHeaders": { "Access-Control-Allow-Origin": "*", "Connection": "keep-alive", "Content-Length": "471", "Content-Type": "application/json; charset=utf-8", "Date": "Wed, 28 Dec 2022 18:24:35 GMT", "ETag": "W/\"1d7-wJcjTY0i2uZnR/PpqKtd3OMb4xo\"", "Keep-Alive": "timeout=5", "X-Powered-By": "Express" }, "responseURL": "http://3.104.104.190:3030/api/v1/client/signup", "status": 201, "timeout": 0, "upload": { }, "withCredentials": true }, "status": 201, "statusText": undefined }


const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
    firstName: yup
        .string()
        .required('First Name is Required'),
    lastName: yup
        .string()
        .required('Last Name is Required'),
    phone: yup
        .string()
        .required('Phone Number is Required'),
    postCode: yup
        .string()
        .required('Post code is Required'),
    userName: yup
        .string()
        .required('User name is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})


const RegisterFormScreen = ({ navigation }) => {
    const [dateOfBirth, setDateOfBirth] = useState(new Date('1993-01-17'))
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [TOCModalVisible, setTOCModalVisible] = useState(false)
    const [PPModalVisible, setPPModalVisible] = useState(false)

    const handleCheckboxPress = () => {
        setChecked(prev => {
            return !prev
        })
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDateOfBirth(currentDate);
    };

    /*const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };*/

    const showDatepicker = () => {
        setMode('date')
        setShow(true);
        // for iOS, add a button that closes the picker
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            headerRight: () => (
                <TouchableOpacity style={{ paddingHorizontal: 10 }}
                    onPress={() => navigation.navigate('Login')}><Text>Sign
                        In</Text></TouchableOpacity>
            ),
        });
    }, []);

    const handleRegister = (data) => {
        data['dateOfBirth'] = dateOfBirth;
        console.log('object', data);

        axios.post(`${BASE_URL}/client/signup`, data)
            .then(response => {
                console.log(response)
                if (response.data.status === 'success') {
                    const user = response.data.data.client;
                    storeData(user, '@activeUser');
                    console.log('REGISTER SUCCESS', user)
                }
            }).catch(err => {
                console.log('error', err)
            });

        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <PinModal
                navigation={navigation}
                to={'Login'}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            // image={forgotPassword}
            // text={'A link has been sent to the Link Me registered email address with instructions for resetting your password.'}
            />
            <TOCModal
                TOCmodalVisible={TOCModalVisible}
                setTOCModalVisible={setTOCModalVisible}
            />
            <PPModal
                PPmodalVisible={PPModalVisible}
                setPPModalVisible={setPPModalVisible}
            />
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>Please fill in the required information below</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    password: '',
                    postCode: ''
                }}
                onSubmit={values => handleRegister(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, values, isValid, touched }) => (
                    <>
                        <TextInput
                            name="firstName"
                            placeholder="First Name"
                            style={(errors.firstName && touched.firstName) ? styles.errorInput : styles.input}
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                            keyboardType="firstName"
                        />
                        {(errors.firstName && touched.firstName) &&
                            <Text style={styles.errorText}>{errors.firstName}</Text>
                        }
                        <TextInput
                            name="lastName"
                            placeholder="Last Name"
                            style={(errors.lastName && touched.lastName) ? styles.errorInput : styles.input}
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                            keyboardType="lastName"
                        />
                        {(errors.lastName && touched.lastName) &&
                            <Text style={styles.errorText}>{errors.lastName}</Text>
                        }
                        <TextInput
                            name="userName"
                            placeholder="User Name"
                            style={(errors.userName && touched.userName) ? styles.errorInput : styles.input}
                            onChangeText={handleChange('userName')}
                            onBlur={handleBlur('userName')}
                            value={values.userName}
                            keyboardType="userName"
                        />
                        {(errors.userName && touched.userName) &&
                            <Text style={styles.errorText}>{errors.userName}</Text>
                        }
                        {/*<TextInput
                            name="lastName"
                            placeholder="DOB"
                            value={dob}
                            style={styles.input}
                            keyboardType={'date'}
                            onFocus={showDatepicker}
                        />*/}
                        <View onTouchStart={showDatepicker} style={styles.input}>
                            <Text>{dateOfBirth.toISOString().split('T')[0]}</Text>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date(dateOfBirth)}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                            />
                        )}
                        {/*<Button onPress={showOnAndroid} title="Show date picker!" />*/}
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
                            name="phone"
                            placeholder="Phone"
                            style={(errors.phone && touched.phone) ? styles.errorInput : styles.input}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            keyboardType="phone"
                        />
                        {(errors.phone && touched.phone) &&
                            <Text style={styles.errorText}>{errors.phone}</Text>
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
                        <TextInput
                            name="postCode"
                            placeholder="Post Code"
                            style={
                                (errors.postCode && touched.postCode) ? styles.errorInput : styles.input}
                            onChangeText={handleChange('postCode')}
                            onBlur={handleBlur('postCode')}
                            value={values.postCode}
                            secureTextEntry
                        />
                        {(errors.postCode && touched.postCode) &&
                            <Text style={styles.errorText}>{errors.postCode}</Text>
                        }
                        {/* <View style={styles.checkboxContainer}>
                            <Pressable onPress={handleCheckboxPress} style={styles.checkbox}>
                                <AnimatedCheckbox
                                    checked={checked}
                                    highlightColor="#77ACA2"
                                    checkmarkColor="#ffffff"
                                    boxOutlineColor="#77ACA2"
                                />
                            </Pressable>
                            <Text style={{ paddingHorizontal: 10 }}>I am agree with the <Text style={{ textDecorationLine: 'underline', fontStyle: 'italic', padding: 0 }} onPress={() => setTOCModalVisible(true)}>Terms of Services</Text> and the
                                <Text style={{ textDecorationLine: 'underline', fontStyle: 'italic', padding: 0 }} onPress={() => setPPModalVisible(true)}>Privacy Policy</Text> of Link Me Digital Health.</Text>
                        </View> */}
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.button}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign up</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default RegisterFormScreen;

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
    },
    checkboxContainer: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20
    },
    checkbox: {
        width: 20,
        height: 20,
        marginRight: 10
    }
});
