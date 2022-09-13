import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from "react-native";

const CustomButton = ({navigation, title, to}) => {

    return (
            <TouchableOpacity
                onPress={() => navigation.navigate(to)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
    );
};

export default CustomButton;
const styles = StyleSheet.create({

    button: {
        backgroundColor: "#77ACA2",
        paddingVertical: 15,
        width: "50%",
        marginBottom: 20,
        borderRadius: 9,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },

});