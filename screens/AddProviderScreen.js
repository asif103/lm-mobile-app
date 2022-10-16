import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity, ScrollView, TextInput
} from "react-native";
import { EvilIcons } from '@expo/vector-icons';
const AddProviderScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchHeaderContainer}>
        <View style={styles.inputContainer}>
          <EvilIcons name="search" size={30} color="black" style={styles.adornmentIcon} />
          <TextInput
              name="firstName"
              placeholder="Search with email here"
              keyboardType="string"
              style={styles.searchInput}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddProviderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 50,
  },
  searchHeaderContainer:{
    width:"100%"
  },
  inputContainer:{
    position:"relative",
    width:"100%",
    alignItems:"center"
  },
  searchInput:{
    backgroundColor:"#F5F5F5",
    padding:20,
    width:'90%',
    borderRadius:30,
    paddingLeft:50
  },
  adornmentIcon:{
    position:"absolute",
    left:30,
    bottom:21,
    zIndex:1
  }
});
