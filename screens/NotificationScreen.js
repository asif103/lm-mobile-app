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
import axios from "axios";
import {BASE_URL} from "../config/config";
import {logCurrentStorage, storeData} from "../config/utils";

const NotificationScreen = ({navigation}) => {
    const notificationData = [
        {
            name: 'name 001',
            image: userImage,
            note: 'A new report has been uploaded.',
            read:false
        },
        {
            name: 'name 002',
            image: userImage,
            note: 'John, requested to get access.',
            read:false
        },
        {
            name: 'name 003',
            image: userImage,
            note: 'A new report has been uploaded.',
            read:true
        },
    ]
    console.log("dddddddddddddddddd",logCurrentStorage)
    const getInvite = () => {

        axios.get(`${BASE_URL}/client/login`, {
            headers: {
                'Authorization': `bearer ${access_token}`
            }
        })
            .then(response => {
                // console.log(response.data.data.user)
                /*if (response.data.status === 'success') {
                    const user = response.data.data.user;
                    storeData(user, '@activeUser');
                }*/
            }).catch(err => {
            console.log('error', err)
        });
    }

    return (
        <SafeAreaView style={styles.container}>
                <HeaderComponent
                    navigation={navigation}
                    notification
                />
            <ScrollView>
                <Text>asdasdas{JSON.stringify(logCurrentStorage)}</Text>

                {
                    notificationData?.map((data, i) =>

                        <View style={{
                            width: Dimensions.get("window").width,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                            backgroundColor: data.read?'#ffffff':"#F5F5F5",
                            borderWidth: 1,
                            borderColor: "#F5F5F5",
                            flexDirection: "row",
                            alignItems: "center"
                        }} key={i}>
                            <Image source={data.image} style={{height: 35, width: 35, marginRight: 10}}/>
                            <View style={{width:'70%'}}>
                                <Text style={{fontSize: 16, fontWeight: "600", color: "#2D2D2D"}}>{data.name}</Text>
                                <Text style={{color: "#505050"}}>{data.note}</Text>
                            </View>
                            <View style={{width:'20%', alignItems:"flex-end", }}>
                                <Text style={{ fontWeight: "500", color: "#2D2D2D"}}>Now</Text>
                                {
                                    !data.read &&
                                <View style={{height:10, width:10, backgroundColor:"#468189", borderRadius:10, marginTop:10}}/>
                                }
                            </View>
                        </View>
                    )
                }

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
