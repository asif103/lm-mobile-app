import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView, ScrollView, Switch, Dimensions,
} from "react-native";
import {AntDesign, Foundation} from '@expo/vector-icons';

const NotificationSettingsScreen = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
               {/* <HeaderComponent
                    navigation={navigation}
                    toc
                    tocTitle={'Settings'}
                />*/}
            <ScrollView>

                <View style={{width:Dimensions.get("window").width, alignItems:"center"}}>
                    <View style={[styles.notificationSettingBox, styles.shadowProp]}>
                        <View style={{width:'10%', alignItems:"center", justifyContent:"center"}}>
                            <Text>
                                <Foundation name="lightbulb" size={30} color="#77ACA2" />
                            </Text>
                        </View>
                        <View style={{width:'80%', justifyContent:"center"}}>
                        <Text style={{textAlign:"left", paddingLeft:10}}>
                            New Provider Request
                        </Text>
                        </View>
                        <View style={{width:'10%', alignItems:"center", justifyContent:"center"}}>
                        <Switch
                            trackColor={{ false: "#f5f5f5", true: "#77ACA2" }}
                            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        </View>
                    </View>
                </View>
                <View style={{width:Dimensions.get("window").width, alignItems:"center"}}>
                    <View style={[styles.notificationSettingBox, styles.shadowProp]}>
                        <View style={{width:'10%', alignItems:"center", justifyContent:"center"}}>
                            <Text>
                                <AntDesign name="clouduploado" size={30} color="#77ACA2" />
                            </Text>
                        </View>
                        <View style={{width:'80%', justifyContent:"center"}}>
                            <Text style={{textAlign:"left", paddingLeft:10}}>
                                New Uploads from Provider
                            </Text>
                        </View>
                        <View style={{width:'10%', alignItems:"center", justifyContent:"center"}}>
                            <Switch
                                trackColor={{ false: "#f5f5f5", true: "#77ACA2" }}
                                thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
                <View style={{width:Dimensions.get("window").width, alignItems:"center"}}>
                    <View style={[styles.notificationSettingBox, styles.shadowProp]}>
                        <View style={{width:'10%', alignItems:"center", justifyContent:"center"}}>
                            <Text>
                                <AntDesign name="sound" size={30} color="#FDCA85" />
                            </Text>
                        </View>
                        <View style={{width:'80%', justifyContent:"center"}}>
                            <Text style={{textAlign:"left", paddingLeft:10}}>
                                Sounds
                            </Text>
                        </View>
                        <View style={{width:'10%', alignItems:"center", justifyContent:"center"}}>
                            <Switch
                                trackColor={{ false: "#f5f5f5", true: "#77ACA2" }}
                                thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.emptySpace}/>
            </ScrollView>


        </SafeAreaView>
    );
};

export default NotificationSettingsScreen;

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
    notificationSettingBox:{
        backgroundColor: 'white',
        width:'90%',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        flexDirection:"row",
        justifyContent:"space-between"
        // borderWidth:2,
        // borderColor:'red'


    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,

        elevation: 5,
    },

});
