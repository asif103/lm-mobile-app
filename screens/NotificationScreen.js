import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView, ScrollView, Dimensions, TouchableOpacity,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import userImage from "../assets/carer.png";
import notificationImage from '../assets/565422.png'
import axios from "axios";
import {BASE_URL} from "../config/config";
import {logCurrentStorage, storeData} from "../config/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    const [activeUser, setActiveUser] = useState({});
    const [activeToken, setActiveToken] = useState({});
    const [invites, setInvites] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('@activeUser')
            .then(res => {
                setActiveUser(JSON.parse(res));
            });
        AsyncStorage.getItem('@activeToken')
            .then(res => {
                setActiveToken(JSON.parse(res));
            });

    }, []);
    useEffect(()=>{
        getInvite()
    }, [activeToken])
    const getInvite = () => {

        axios.get(`${BASE_URL}/client/providerRequests`, {
            headers: {
                'Authorization': `Bearer ${activeToken}`
            }
        })
            .then(response => {
                // console.log("daaaaataaaaaaaaa",response.data.data[0].clientId.firstName)
                setInvites(response.data.data)
                /*if (response.data.status === 'success') {
                    const user = response.data.data.user;
                    storeData(user, '@activeUser');
                }*/
            }).catch(err => {
            console.log('error', err)
        });
    }

    const acceptInvite =(providerId) =>{
    console.log(providerId)
    console.log(activeToken)
        /*axios.post(`${BASE_URL}/client/acceptInvite/${providerId}`, {},
        {
            headers: {
                'Authorization': `Bearer ${activeToken}`
            }
        })
            .then(response => {
                console.log("daaaaa",response.data)
                // setInvites(response.data.data)
                /!*if (response.data.status === 'success') {
                    const user = response.data.data.user;
                    storeData(user, '@activeUser');
                }*!/
            }).catch(err => {
            console.log('error', err)
        });*/
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${activeToken}`);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`${BASE_URL}/client/acceptInvite/${providerId}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <SafeAreaView style={styles.container}>
                <HeaderComponent
                    navigation={navigation}
                    notification
                />
            <ScrollView>
                {/*<Text>asdasdas{JSON.stringify(activeToken)}</Text>*/}

                {/*{
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
                }*/}
                {
                    invites?.map((invite, i) =>

                        <View style={{
                            width: Dimensions.get("window").width,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                            backgroundColor: "#F5F5F5",
                            borderWidth: 1,
                            borderColor: "#ffffff",
                            flexDirection: "row",
                            alignItems: "center"
                        }} key={i}>
                            <Image source={notificationImage} style={{height: 35, width: 35, marginRight: 10}}/>
                            <View style={{width:'70%'}}>
                                <Text style={{fontSize: 16, fontWeight: "600", color: "#2D2D2D"}}>{invite.providerId?.firstName} {invite.providerId?.lastName}</Text>
                                <Text style={{color: "#505050"}}>A new request has been received</Text>
                            </View>
                            <View style={{width:'20%', alignItems:"flex-end", }}>
                                <TouchableOpacity onPress={()=>acceptInvite(invite._id)}>

                                <Text style={{ fontWeight: "500", color: "#2D2D2D", padding:5, backgroundColor:"lightgreen"}}>accept</Text>
                                </TouchableOpacity>
                                {/*{
                                    !data.read &&
                                    <View style={{height:10, width:10, backgroundColor:"#468189", borderRadius:10, marginTop:10}}/>
                                }*/}
                            </View>
                        </View>
                    )
                }
                {/*{
                    invites?.map((invite,i)=>
                        <View key={i} style={{flexDirection:"row", paddingHorizontal:20, justifyContent:"space-between", marginVertical:5}}>

                    <Text >{invite.providerId?.firstName} {invite.providerId?.lastName} </Text>
                            <TouchableOpacity onPress={()=>acceptInvite(invite._id)}><Text style={{padding:5, backgroundColor:"lightgreen"}}>accept</Text></TouchableOpacity>
                        </View>
                    )
                }*/}

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
