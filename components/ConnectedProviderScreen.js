import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import HeaderComponent from "./HeaderComponent";
import userImage from "../assets/user.png";
import {AntDesign} from "@expo/vector-icons";
import CustomModal from "./shared/CustomModal/CustomModal";
import forgotPassword from "../assets/gifs/forgot_password.gif";

const ConnectedProviderScreen = ({navigation, userImage, title, to, subtitle}) => {

    return (

        <>

            <TouchableOpacity style={styles.userCard}
                              onPress={() => navigation.navigate('providerProfile')}
            >
                <View style={styles.userCardInfo}>
                    <Image source={userImage} style={styles.userCardImage}/>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                </View>
                <View>
                    <AntDesign name="right" size={16} color="black"/>
                </View>
            </TouchableOpacity>
        </>

    );
};

export default ConnectedProviderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingTop: 50,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "bold",
        color:"#505050"
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
    },
    paragraph: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        textAlign: "center",
    },
    mainContentContainer: {
        paddingVertical: 20,
        width: "90%",
    },
    userCard: {
        width: "90%",
        padding: 20,
        marginTop: 10,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userCardInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    userCardImage: {
        height: 36,
        width: 36,
        borderRadius: 36 / 2,
        marginRight: 10,
    },
});
