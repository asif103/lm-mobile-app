import React, {useState} from "react";
import {
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity, ScrollView, Image, Text
} from "react-native";
import image1 from '../assets/resources/1.png'
import image2 from '../assets/resources/2.png'
import image3 from '../assets/resources/3.png'


const ProviderProgramScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            title: "Resources",
            headerTitleAlign: 'center'
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.mainContainer}>
                <View style={styles.itemsContainer}>
                    <TouchableOpacity style={styles.itemContainer}
                                      onPress={() => navigation.navigate('providerProgramNotes')}>
                        <Text style={{fontSize:14, fontWeight:"bold"}}>12 March, 2022</Text>
                        <View style={styles.itemInformationContainer}>
                            <Image source={image1} style={styles.ImagesStyle}/>
                            <Image source={image2} style={styles.ImagesStyle}/>
                            <Image source={image2} style={styles.ImagesStyle}/>
                            <Image source={image3} style={styles.ImagesStyle}/>
                            <Image source={image3} style={styles.ImagesStyle}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}
                                      onPress={() => navigation.navigate('providerProgramNotes')}>
                        <Text style={{fontSize:14, fontWeight:"bold"}}>12 March, 2022</Text>
                        <View style={styles.itemInformationContainer}>
                            <Image source={image1} style={styles.ImagesStyle}/>
                            <Image source={image2} style={styles.ImagesStyle}/>
                            <Image source={image2} style={styles.ImagesStyle}/>
                            <Image source={image3} style={styles.ImagesStyle}/>
                            <Image source={image3} style={styles.ImagesStyle}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}
                                      onPress={() => navigation.navigate('providerProgramNotes')}>
                        <Text style={{fontSize:14, fontWeight:"bold"}}>12 March, 2022</Text>
                        <View style={styles.itemInformationContainer}>
                            <Image source={image1} style={styles.ImagesStyle}/>
                            <Image source={image2} style={styles.ImagesStyle}/>
                            <Image source={image2} style={styles.ImagesStyle}/>
                            <Image source={image3} style={styles.ImagesStyle}/>
                            <Image source={image3} style={styles.ImagesStyle}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}
                                      onPress={() => navigation.navigate('providerProgramNotes')}>
                        <Text style={{fontSize:14, fontWeight:"bold"}}>12 March, 2022</Text>
                        <View style={styles.itemInformationContainer}>
                            <Image source={image1} style={styles.ImagesStyle}/>
                            <Image source={image2} style={styles.ImagesStyle}/>
                            <Image source={image2} style={styles.ImagesStyle}/>
                            <Image source={image3} style={styles.ImagesStyle}/>
                            <Image source={image3} style={styles.ImagesStyle}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProviderProgramScreen;

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

    itemsContainer: {
        width: "100%",
        alignItems: "center",
        padding: 10,

    },
    itemContainer: {
        padding: 10,
        backgroundColor: "#F5F5F5",
        borderRadius: 9,
        width: '100%',
        marginVertical: 10,
    },
    ImagesStyle:{
        maxWidth:90,
        maxHeight:90,
        margin:5
    },
    title: {
        width: '90%',
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "left"
    },
    itemInformationContainer:{
        flexDirection:"row",
        flexWrap:"wrap"
    }

});
