import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity, ScrollView, TextInput
} from "react-native";
import providerImage from '../assets/provider.png'
import {MaterialIcons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import confirmRemove from '../assets/gifs/confirmRemove.gif'
import CustomModal from "../components/shared/CustomModal/CustomModal";
const ProviderReportsScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            title: "Reports",
            headerTitleAlign: 'center'
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.mainContainer}>
                <View style={styles.itemsContainer}>
                    <TouchableOpacity style={styles.itemContainer} onPress={()=>navigation.navigate('providerReportDetail')}>
                        <View style={styles.itemInformationContainer}>
                            <View>
                                <Text style={styles.providerName}>Lorem Ipsam</Text>
                                <Text style={styles.providerSubtitle}>12 March, 2022</Text>
                            </View>
                            <View>
                                <AntDesign name="right" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer} onPress={()=>navigation.navigate('providerReportDetail')}>
                        <View style={styles.itemInformationContainer}>
                            <View>
                                <Text style={styles.providerName}>Lorem Ipsam</Text>
                                <Text style={styles.providerSubtitle}>12 March, 2022</Text>
                            </View>
                            <View>
                                <AntDesign name="right" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer} onPress={()=>navigation.navigate('providerReportDetail')}>
                        <View style={styles.itemInformationContainer}>
                            <View>
                                <Text style={styles.providerName}>Lorem Ipsam</Text>
                                <Text style={styles.providerSubtitle}>12 March, 2022</Text>
                            </View>
                            <View>
                                <AntDesign name="right" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProviderReportsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingTop: 20,
    },
    mainContainer: {
        width: "100%"
    },
    headerContainer: {
        flexDirection: "row",
        padding: 20
    },
    headerImageContainer: {
        marginRight: 20
    },
    providerImageStyle: {
        width: 105,
        height: 113
    },
    headerInformation: {},
    headerIcons: {
        marginTop: 10,
        flexDirection: "row"
    },
    providerName: {
        fontSize: 17,
        fontWeight: "bold"
    },
    providerSubtitle: {
        fontSize: 14,
        color: '#505050'
    },
    iconContainer: {
        height: 40,
        width: 40,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: '#77ACA2',
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
    },
    itemIconContainer:{
        paddingRight:20
    },
    itemsContainer:{
        width:"100%",
        alignItems:"center",

    },
    itemContainer: {
        padding:20,
        backgroundColor:"#F5F5F5",
        borderRadius:9,
        width:'90%',
        marginVertical:10
    },
    itemInformationContainer:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center"
    },
    title:{
        width:'90%',
        fontSize: 17,
        fontWeight: "bold",
        textAlign:"left"
    },
    ButtonContainer:{
        backgroundColor: "#77ACA2",
        paddingVertical: 15,
        width: "90%",
        marginBottom: 20,
        borderRadius: 9,
    },
    ButtonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    unlinkButtonContainer:{
        backgroundColor: "#FF7676",
        paddingVertical: 15,
        width: "50%",
        marginBottom: 20,
        borderRadius: 9,
    }

});
