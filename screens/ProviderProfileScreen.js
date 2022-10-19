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
const ProviderProfileScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            title: "Josh Walsh",
            headerTitleAlign: 'center'
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <CustomModal
                navigation={navigation}
                image={confirmRemove}
                to={'Client Home'}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                title={'Do you want to switch client?'}
                cancelButton
                unlinkButton
                cancelText={`I've changed my mind!`}
            />
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
                                <MaterialIcons name="phone-in-talk" size={24} color="#ffffff"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                <MaterialCommunityIcons name="email-outline" size={24} color="#ffffff"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                <Entypo name="location" size={24} color="#ffffff"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                <Feather name="globe" size={24} color="#ffffff"/>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={styles.itemsContainer}>
                    <TouchableOpacity style={styles.itemContainer} onPress={()=>navigation.navigate('providerProgram')}>
                        <View style={styles.itemIconContainer}>
                            <MaterialCommunityIcons name="post-outline" size={40} color="black"/>
                        </View>
                        <View style={styles.itemInformationContainer}>
                            <View>
                                <Text style={styles.providerName}>Programs</Text>
                                <Text style={styles.providerSubtitle}>Shared by Josh Walsh</Text>
                            </View>
                            <View>
                                <AntDesign name="right" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.itemContainer} onPress={()=>navigation.navigate('providerReportScreen')}>
                        <View style={styles.itemIconContainer}>
                            <MaterialCommunityIcons name="post-outline" size={40} color="black"/>
                        </View>
                        <View style={styles.itemInformationContainer}>
                            <View>
                                <Text style={styles.providerName}>Reports</Text>
                                <Text style={styles.providerSubtitle}>Shared by Josh Walsh</Text>
                            </View>
                            <View>
                                <AntDesign name="right" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.itemContainer} onPress={()=>navigation.navigate('providerResource')}>
                        <View style={styles.itemIconContainer}>
                            <MaterialCommunityIcons name="post-outline" size={40} color="black"/>
                        </View>
                        <View style={styles.itemInformationContainer}>
                            <View>
                                <Text style={styles.providerName}>Resources</Text>
                                <Text style={styles.providerSubtitle}>Shared by Josh Walsh</Text>
                            </View>
                            <View>
                                <AntDesign name="right" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.itemContainer}>
                        <View style={styles.itemIconContainer}>
                            <FontAwesome name="file-image-o" size={40} color="black" />
                        </View>
                        <View style={styles.itemInformationContainer}>
                            <View>
                                <Text style={styles.providerName}>My Uploads</Text>
                                <Text style={styles.providerSubtitle}>Uploaded by me</Text>
                            </View>
                            <View>
                                <AntDesign name="right" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemsContainer}>
                    <Text style={styles.title}>Linked Provider</Text>
                    <TouchableOpacity style={styles.itemContainer}>
                        <Text style={styles.providerName}>Physiologist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}>
                        <Text style={styles.providerName}>Physiologist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}>
                        <Text style={styles.providerName}>Physiologist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}>
                        <Text style={styles.providerName}>Physiologist</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText}>Invite Provider</Text>
                </TouchableOpacity>
                    <TouchableOpacity style={styles.unlinkButtonContainer} onPress={() => setModalVisible(true)}>
                        <Text style={styles.ButtonText}>Unlink</Text>
                    </TouchableOpacity>
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
        flexDirection:"row",
        alignItems:"center",
        padding:20,
        backgroundColor:"#F5F5F5",
        borderRadius:9,
        width:'90%',
        marginVertical:10
    },
    itemInformationContainer:{
        flexDirection:"row",
        width:"80%",
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
