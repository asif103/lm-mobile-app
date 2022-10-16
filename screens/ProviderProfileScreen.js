import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity, ScrollView, TextInput
} from "react-native";
import providerImage from '../assets/provider.png'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const ProviderProfileScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            title: "Josh Walsh",
            headerTitleAlign: 'center'
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerImageContainer}>
                        <Image source={providerImage} style={styles.providerImageStyle}/>
                    </View>
                    <View style={styles.headerInformation}>
                        <View>
                            <Text style={styles.providerName}>Speech Pathologist</Text>
                            <Text style={styles.providerSubtitle}>The Example Health Care
                                Centre</Text>
                        </View>
                        <View style={styles.headerIcons}>
                            <TouchableOpacity style={styles.iconContainer}>
                                <MaterialIcons name="phone-in-talk" size={24} color="#ffffff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                <MaterialCommunityIcons name="email-outline" size={24} color="#ffffff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                <Entypo name="location" size={24} color="#ffffff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                <Feather name="globe" size={24} color="#ffffff" />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProviderProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingTop: 50,
    },
    mainContainer: {
        width: "100%"
    },
    headerContainer: {
        flexDirection:"row",
        padding:20
    },
    headerImageContainer: {
        marginRight:20
    },
    providerImageStyle: {
        width: 105,
        height: 113
    },
    headerInformation:{

    },
    headerIcons:{
        marginTop:10,
        flexDirection:"row"
    },
    providerName:{
        fontSize:17,
        fontWeight:"bold"
    },
    providerSubtitle:{
        fontSize:14,
        color: '#505050'
    },
    iconContainer:{
        height:40,
        width:40,
        marginRight:10,
        borderRadius:20,
        backgroundColor:'#77ACA2',
        display:"flex",
        alignItems:'center',
        justifyContent:"center",


    }

});
