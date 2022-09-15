import React from 'react';
import {StyleSheet, Text, View, Image} from "react-native";

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>

                <Text>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#ffffff"
    },
    subTitle: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center"
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center"
    },
    paragraph: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        textAlign: "center"
    }
});