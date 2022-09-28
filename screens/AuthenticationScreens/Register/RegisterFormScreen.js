import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable, Button} from "react-native";
import {Formik} from 'formik'
import * as yup from 'yup'
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import forgotPassword from "../../../assets/gifs/forgot_password.gif";
import CustomModal from "../../../components/shared/CustomModal/CustomModal";
import PinModal from "../../../components/shared/PinModal/PinModal";


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
    password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})


const RegisterFormScreen = ({navigation}) => {
    const [dob, setDob] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    const handleCheckboxPress = () => {
        setChecked(prev => {
            return !prev
        })
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDob(currentDate);
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
                <TouchableOpacity style={{paddingHorizontal: 10}}
                                  onPress={() => navigation.navigate('Login')}><Text>Sign
                    In</Text></TouchableOpacity>
            ),
        });
    }, []);
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
                    passwordConfirmation: ''
                }}
                onSubmit={() => setModalVisible(true)}
            >
                {({handleChange, handleBlur, handleSubmit, errors, values, isValid, touched}) => (
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
                        {/*<TextInput
                            name="lastName"
                            placeholder="DOB"
                            value={dob}
                            style={styles.input}
                            keyboardType={'date'}
                            onFocus={showDatepicker}
                        />*/}
                        <View onTouchStart={showDatepicker} style={styles.input}>
                            <Text>{dob.toISOString().split('T')[0]}</Text>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date(dob)}
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
                            name="passwordConfirmation"
                            placeholder="Confirm Password"
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
                        <View style={styles.checkboxContainer}>
                            <Pressable onPress={handleCheckboxPress} style={styles.checkbox}>
                                <AnimatedCheckbox
                                    checked={checked}
                                    highlightColor="#77ACA2"
                                    checkmarkColor="#ffffff"
                                    boxOutlineColor="#77ACA2"
                                />
                            </Pressable>
                            <Text>I am agree with the Terms of Services and the
                                Privacy Policy of Link Me Digital Health.</Text>
                        </View>
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
        flexDirection:"row",
        alignItems:"center",
        marginVertical:20
    },
    checkbox: {
        width: 20,
        height: 20,
        marginRight:10
    }
});