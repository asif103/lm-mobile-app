import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import CustomButton from "../components/shared/CustomButton/CustomButton";

const ScreenTwo = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
        });
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.banner}
                    source={require('../assets/Graphic_Elements_1_.png')}
                />
            </View>
            <View>


                <Text style={styles.subTitle}>Securely store your healthcare</Text>
                <Text style={styles.title}>Information</Text>
                <Text style={styles.paragraph}>Link Me provides Australian Healthcare clients a central platform to
                    store and use your healthcare information.</Text>
            </View>
            <CustomButton navigation={navigation} title={'Get Started'} to={'Login'}/>
        </View>
    );
};

export default ScreenTwo;

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