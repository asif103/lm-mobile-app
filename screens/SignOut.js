import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView, ScrollView, Pressable,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import signOutImage from '../assets/gifs/signOut.gif'

const SignOut = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                navigation={navigation}
                toc
                tocTitle={'Sign Out'}
            />
            <ScrollView>

                <Image source={signOutImage} style={{maxWidth: 315, maxHeight: 315}}/>
                <Text style={{fontWeight:"500", fontSize:17, textAlign:"center", paddingVertical:10}}>It is hard to see you leave!</Text>
                    <Text style={{fontWeight:"500", fontSize:17, textAlign:"center", paddingVertical:10}}>Comeback anytime!</Text>
                <Pressable
                    style={[styles.button, styles.cancelButton]}
                >
                    <Text style={styles.buttonTextDark}>I’ve changed my mind</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.customButton]}
                >
                    <Text style={styles.buttonText}>Sign out</Text>
                </Pressable>
                <View style={styles.emptySpace}/>
            </ScrollView>


        </SafeAreaView>
    );
};

export default SignOut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingTop: 50,
        position: "relative"
    },
    emptySpace: {
        height: 50
    },
    inputContainer: {
        position: "relative",
        width: "100%",
        alignItems: "center"
    },
    searchInput: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#F5F5F5",
        padding: 10,
        width: '90%',
        borderRadius: 10,
        paddingLeft: 50
    },
    adornmentIcon: {
        position: "absolute",
        right: 30,
        bottom: 15,
        zIndex: 1
    },
    cancelButton:{
        backgroundColor: "#F5F5F5",
        paddingVertical: 15,
        width: "100%",
        borderRadius: 9,
    },
    customButton:{
        backgroundColor: "#77ACA2",
        paddingVertical: 15,
        width: "100%",
        borderRadius: 9,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    buttonTextDark: {
        color: "#505050",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    button:{
        marginVertical:10
    }

});
