import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView, ScrollView, Dimensions,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import userImage from "../assets/carer.png";

const NotificationScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
                <HeaderComponent
                    navigation={navigation}
                    notification
                />
            <ScrollView>


                <View style={{width:Dimensions.get("window").width, padding:10, backgroundColor:"#F5F5F5", borderWidth:1, borderColor:"#F5F5F5", flexDirection:"row", alignItems:"center"}}>
                    <Image source={userImage} style={{height:35, width:35, marginRight:10}}/>
                    <View>
                        <Text style={{fontSize:16, fontWeight:"600", color:"#2D2D2D"}}>John Smith</Text>
                        <Text style={{color:"#505050"}}>A new report has been uploaded.</Text>
                    </View>
                </View>

                <View style={styles.emptySpace}/>
            </ScrollView>


        </SafeAreaView>
    );
};

export default NotificationScreen;

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
    }

});
