import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import screen1 from '../assets/Group.png'
import CustomButton from "../components/shared/CustomButton/CustomButton";

const ScreenOne = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{paddingHorizontal: 10}} onPress={() => navigation.navigate('DrawerScreen')}><Text>skip</Text></TouchableOpacity>
            ),
        });
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.banner}
                    source={screen1}
                />
            </View>
            <View>
                <Text style={styles.subTitle}>Bring your team work</Text>
                <Text style={styles.title}>Together</Text>
                <Text style={styles.paragraph}>Link Me is a platform which enables Australian Healthcare clients and
                    their healthcare providers to communicate and collaborate, bringing back a multidisciplinary
                    approach to your health.</Text>
            </View>
            <CustomButton navigation={navigation} title={'Next'} to={'ScreenTwo'}/>
        </View>
    );
};

export default ScreenOne;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#ffffff"
    },
    subTitle: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center"
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center"
    },
    paragraph: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        textAlign: "center"
    }
});