import React from 'react';
import {StyleSheet, Text, View, Pressable, Modal, Alert, Image} from "react-native";



const CustomModal = ({navigation, image, modalVisible, setModalVisible, text, to}) => {
    const modalClosePressed = () => {
        setModalVisible(!modalVisible)
        navigation.navigate(to)
    }

    return (

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
                            source={image}
                        />
                        <Text style={styles.modalText}>{text}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={modalClosePressed}
                        >
                            <Text style={styles.buttonText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
    );
};

export default CustomModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
        backgroundColor: "#ffffff"
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