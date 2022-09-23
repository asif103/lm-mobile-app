import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image} from "react-native";
import userTypeImage from '../../../assets/gifs/usetType.gif'


const ChooseUserScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

            <Text style={styles.title}>Choose user type</Text>
            <Image
                style={styles.chooseUserImage}
                source={userTypeImage}
            />
            <TouchableOpacity style={styles.carerButton}>
                <Text style={styles.buttonText}>I am the parent, carer of the client</Text>
            </TouchableOpacity>
            <View style={styles.orDivider}>
                <View style={styles.lines}/>
                <Text style={styles.dividerText}>OR</Text>
                <View style={styles.lines}/>
            </View>
            <TouchableOpacity style={styles.clientButton}>
                <Text style={styles.buttonText}>I am the client, using LinkMe myself</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChooseUserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
        backgroundColor: "#ffffff"
    },

    title: {
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 21,
        marginTop: 30
    },
    chooseUserImage: {
        maxWidth: 300,
        height: 300,
        marginVertical: 30
    },
    carerButton: {
        backgroundColor: "#E6F4F6",
        width: "90%",
        borderRadius: 9

    },
    clientButton: {
        backgroundColor: "#F9EFE7",
        width: "90%",
        borderRadius: 9

    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#77ACA2',
        textAlign: "center",
        paddingVertical: 30
    },
    lines: {
        height: 2,
        width: 100,
        backgroundColor: "#F5F5F5",
        marginVertical: 5
    },
    orDivider: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical:25
    },
    dividerText:{
       color:"#ADADAD",
        fontSize:20,
        marginHorizontal:30
    }

});