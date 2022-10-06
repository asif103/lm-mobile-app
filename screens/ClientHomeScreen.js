import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity, ScrollView
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import userImage from "../assets/user.png";
import { Ionicons } from '@expo/vector-icons';
import ConnectedProviderScreen from "../components/ConnectedProviderScreen";
const ClientHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <HeaderComponent
            navigation={navigation}
            greet={"Good Morning"}
            name={"Sam Samson"}
            imageFile={userImage}
        />
      <ScrollView style={styles.containerInner}>
        <View style={styles.mainContentContainer}>
          <Text style={styles.title}>My Providers</Text>
        </View>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <ConnectedProviderScreen navigation={navigation} userImage={userImage} title={'sam samson'} subtitle={'Speech Pathologist'}/>
        <View style={styles.emptySpace}/>
      </ScrollView>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="ios-add-circle" size={50} color="#77ACA2" />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ClientHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 50,
    position: "relative"
  },
  containerInner:{
    padding:30,
    marginBottom:20
  },
  emptySpace:{
    height:50
  },
  addButton:{
    position:"absolute",
    bottom:50,
    right:30
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  paragraph: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    textAlign: "center",
  },
  mainContentContainer: {
    paddingTop: 20,
    width: "90%",
  },
  userCard: {
    width: "90%",
    padding: 20,
    marginTop: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userCardInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userCardImage: {
    height: 36,
    width: 36,
    borderRadius: 36 / 2,
    marginRight: 10,
  },
});
