import React from 'react';
import {StyleSheet, Text, View, Pressable, Modal, Alert, Image} from "react-native";


const CustomModal = ({navigation, image, modalVisible, setModalVisible, text, title, to, cancelButton}) => {
    const modalClosePressed = () => {
        setModalVisible(!modalVisible)
        navigation.navigate(to)
    }
    const cancelPressed = () => {
        setModalVisible(!modalVisible)
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
                    {
                        image &&
                        <Image
                            style={styles.forgotPasswordImage}
                            source={image}
                        />
                    }
                    {
                        title &&
                        <Text style={styles.Title}>{title}</Text>
                    }
                    {
                        text &&
                        <Text style={styles.modalText}>{text}</Text>
                    }
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={modalClosePressed}
                    >
                        <Text style={styles.buttonText}>Yes, switch</Text>
                    </Pressable>
                    {
                        cancelButton &&

                    <Pressable
                        style={[styles.button, styles.cancelButton]}
                        onPress={cancelPressed}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </Pressable>
                    }
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
    forgotPasswordImage: {
        maxWidth: 150,
        height: 150
    },
    Title:{
fontSize:17
    },
    button: {
        backgroundColor: "#77ACA2",
        paddingVertical: 15,
        width: "100%",
        marginBottom: 10,
        borderRadius: 9,
        marginTop: 30
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
        backgroundColor:'#28282880'
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
    },
    cancelButton:{
        backgroundColor: "#ADADAD",
        paddingVertical: 15,
        width: "100%",
        borderRadius: 9,
        marginTop:-5

    },
    modalContainer:{
        backgroundColor:'#282828'
    }
});