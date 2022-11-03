import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable, Button} from "react-native";
import {Formik} from 'formik'
import * as yup from 'yup'
import DateTimePicker from '@react-native-community/datetimepicker';
import successAdd from "../assets/gifs/success_password_change.gif";
import CustomModal from "../components/shared/CustomModal/CustomModal";


const loginValidationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('First Name is Required'),
    lastName: yup
        .string()
        .required('Last Name is Required'),

})


const AddClientScreen = ({navigation}) => {
    const [dob, setDob] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDob(currentDate);
    };



    const showDatepicker = () => {
        setMode('date')
        setShow(true);
        // for iOS, add a button that closes the picker
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            /*headerRight: () => (
                <TouchableOpacity style={{paddingHorizontal: 10}}
                                  onPress={() => navigation.navigate('Login')}><Text>Sign
                    In</Text></TouchableOpacity>
            ),*/
        });
    }, []);
    return (
        <View style={styles.container}>
            <CustomModal
                navigation={navigation}
                to={'Home Screen'}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                image={successAdd}
                yesButton
                buttonText={'Done'}
                text={'Successfully added new client.'}
            />
            <Text style={styles.title}>Client’s information</Text>
            <Text style={styles.subtitle}>Please fill up the form with the client’s information.</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{
                    firstName: '',
                    lastName: '',
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
                            name="relationship"
                            placeholder="Relationship with the client"
                            style={(errors.relationship && touched.relationship) ? styles.errorInput : styles.input}
                            onChangeText={handleChange('relationship')}
                            onBlur={handleBlur('relationship')}
                            value={values.relationship}
                            keyboardType="string"
                        />
                        {(errors.relationship && touched.relationship) &&
                            <Text style={styles.errorText}>{errors.relationship}</Text>
                        }

                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.button}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Add Client</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default AddClientScreen;

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