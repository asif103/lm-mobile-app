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
    headerContainer: {},
    headerImageContainer: {},
    providerImageStyle: {
        width: 105,
        height: 113
    }
});
