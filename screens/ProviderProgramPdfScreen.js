import React, {useState} from "react";
import {StyleSheet, Dimensions, View, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';
// import Pdf from 'react-native-pdf';

const ProviderProgramPdfScreen = ({navigation}) => {
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShadowVisible: false,
            title: "PDF Name",
            headerTitleAlign: 'center'
        });
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <WebView
                bounces={false}
                scrollEnabled={true}
                source={{ uri: 'https://www.africau.edu/images/default/sample.pdf' }} />

        </SafeAreaView>
    );
};

export default ProviderProgramPdfScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
