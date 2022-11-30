import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView, ScrollView, TextInput,
} from "react-native";
import {SimpleAccordion} from 'react-native-simple-accordion';

const FAQScreen = ({navigation}) => {
    const faqData = [
        {
            question: "How to unlink my provider?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, pulvinar sed tincidunt eleifend natoque ultrices. Amet porttitor dictumst faucibus iaculis. Egestas auctor tortor, hendrerit ut suspendisse diam. Habitant etiam erat quis risus tortor sed. Dignissim quisque eu, ornare neque lacus nibh. Augue erat ultrices vitae fringilla lorem fringilla praesent. Nisi adipiscing a tristique lacus, maecenas ac, nunc. Cras."
        },
        {
            question: "How to invite provider?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, pulvinar sed tincidunt eleifend natoque ultrices. Amet porttitor dictumst faucibus iaculis. Egestas auctor tortor, hendrerit ut suspendisse diam. Habitant etiam erat quis risus tortor sed. Dignissim quisque eu, ornare neque lacus nibh. Augue erat ultrices vitae fringilla lorem fringilla praesent. Nisi adipiscing a tristique lacus, maecenas ac, nunc. Cras."
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                {
                    faqData?.map((data, i)=>
                        <SimpleAccordion key={i} viewInside={
                            <View>
                                <Text>{data.answer}</Text>
                            </View>
                        } title={data.question} showContentInsideOfCard={false}
                                         viewContainerStyle={{backgroundColor: "#F5F5F5"}} arrowColor={'#8F8F8F'}
                                         bannerStyle={{backgroundColor: "#F5F5F5"}} titleStyle={{color: "#468189"}}/>
                    )
                }
                <View style={styles.emptySpace}/>
            </ScrollView>


        </SafeAreaView>
    );
};

export default FAQScreen;

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
