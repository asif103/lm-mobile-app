import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView, ScrollView, TextInput, TouchableOpacity,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import helpImage from '../assets/gifs/help.gif'
import {MaterialCommunityIcons} from "@expo/vector-icons";

const HelpAndSupport = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent
                navigation={navigation}
                toc
                tocTitle={'Help & Support'}
            />
            <ScrollView>
                <Image source={helpImage} style={{maxHeight: 342, maxWidth: 342}}/>
                <Text style={{textAlign: "center", fontWeight: "600", fontSize: 17}}>Do you need a help?</Text>
                <Text style={{textAlign: "center", fontWeight: "400", fontSize: 13, paddingHorizontal: 30}}>If you have
                    any query please check
                    frequently asked questions or write to us. We will be happy to help you!</Text>
                <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 20}}>
                    <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('faq')}>
                        <MaterialCommunityIcons name="file-question-outline" size={35} color="#468189"/>
                        <Text style={{textAlign: "center", fontWeight: "600", fontSize: 13}}>Frequently asked
                            questions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <MaterialCommunityIcons name="email-multiple-outline" size={35} color="#468189"/>
                        <Text style={{textAlign: "center", fontWeight: "600", fontSize: 13}}>Write to us</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.emptySpace}/>
            </ScrollView>


        </SafeAreaView>
    );
};

export default HelpAndSupport;

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
    box: {
        height: 134,
        width: 134,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }

});
