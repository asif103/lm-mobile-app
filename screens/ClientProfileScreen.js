import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView, ScrollView, TextInput,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import userImage from "../assets/client.png";
import {AntDesign , MaterialCommunityIcons} from '@expo/vector-icons';

const ClientProfileScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HeaderComponent
                    navigation={navigation}
                    profile
                />

                <View style={{position: "relative", alignItems:"center"}}>
                    <Image source={userImage}/>
                    <MaterialCommunityIcons name="camera-plus-outline" size={30} color="#ffffff"
                                            style={{position: "absolute", top: "30%", left: "45%"}}/>
                </View>
                <View style={{width:"100%"}}>
                    <Text style={{fontWeight: "bold", fontSize: 17,  textAlign:"center"}}>Set New Photo</Text>
                </View>
                <View>
                    <View style={styles.inputContainer}>
                        <View style={{width:"85%",paddingVertical:10}}>
                            <Text style={{textAlign:"left", fontWeight:"bold"}}>First Name</Text>
                        </View>
                        <TextInput
                            name="firstName"
                            placeholder="First Name"
                            keyboardType="string"
                            style={styles.searchInput}
                            value={'Sam'}
                        />
                        <AntDesign name="edit" size={24} color="#ADADAD" style={styles.adornmentIcon}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{width:"85%",paddingVertical:10}}>
                            <Text style={{textAlign:"left", fontWeight:"bold"}}>Last Name</Text>
                        </View>
                        <TextInput
                            name="lastName"
                            placeholder="Last Name"
                            keyboardType="string"
                            style={styles.searchInput}
                            value={'Samson'}
                        />
                        <AntDesign name="edit" size={24} color="#ADADAD" style={styles.adornmentIcon}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{width:"85%",paddingVertical:10}}>
                            <Text style={{textAlign:"left", fontWeight:"bold"}}>Date of Birth</Text>
                        </View>
                        <TextInput
                            name="dob"
                            placeholder="Date of Birth"
                            keyboardType="string"
                            style={styles.searchInput}
                            value={'2 March 2009'}
                        />
                        <AntDesign name="edit" size={24} color="#ADADAD" style={styles.adornmentIcon}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{width:"85%",paddingVertical:10}}>
                            <Text style={{textAlign:"left", fontWeight:"bold"}}>Email</Text>
                        </View>
                        <TextInput
                            name="email"
                            placeholder="Email"
                            keyboardType="string"
                            style={styles.searchInput}
                            value={'sample_email@example.com'}
                        />
                        <AntDesign name="edit" size={24} color="#ADADAD" style={styles.adornmentIcon}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{width:"85%",paddingVertical:10}}>
                            <Text style={{textAlign:"left", fontWeight:"bold"}}>Phone</Text>
                        </View>
                        <TextInput
                            name="phone"
                            placeholder="Phone"
                            keyboardType="string"
                            style={styles.searchInput}
                            value={'+0123456789'}
                        />
                        <AntDesign name="edit" size={24} color="#ADADAD" style={styles.adornmentIcon}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{width:"85%",paddingVertical:10}}>
                            <Text style={{textAlign:"left", fontWeight:"bold"}}>Diagnosis</Text>
                        </View>
                        <TextInput
                            name="diagnosis"
                            placeholder="Diagnosis"
                            keyboardType="string"
                            style={styles.searchInput}
                            value={'Autism'}
                        />
                        <AntDesign name="edit" size={24} color="#ADADAD" style={styles.adornmentIcon}/>
                    </View>
                </View>
                <View style={styles.emptySpace}/>
            </ScrollView>


        </SafeAreaView>
    );
};

export default ClientProfileScreen;

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
    inputContainer:{
        position:"relative",
        width:"100%",
        alignItems:"center"
    },
    searchInput:{
        backgroundColor:"#ffffff",
        borderWidth:1,
        borderColor:"#F5F5F5",
        padding:10,
        width:'90%',
        borderRadius:10,
        paddingLeft:50
    },
    adornmentIcon:{
        position:"absolute",
        right:30,
        bottom:15,
        zIndex:1
    }

});
