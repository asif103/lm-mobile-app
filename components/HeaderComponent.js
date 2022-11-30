import React from "react";
import {StyleSheet, Text, View, Image, SafeAreaView, BackHandler, TouchableOpacity} from "react-native";
import { AntDesign, MaterialIcons, Ionicons  } from "@expo/vector-icons";

const HeaderComponent = ({ navigation, greet, name, imageFile, profile, toc, tocTitle, notification }) => {
  return (
    <View style={styles.headerBar}>
      {(!profile && !toc && !notification) &&

      <>
        <View style={styles.infoContainer}>
          <Image source={imageFile} style={styles.profileImage} />
          <View>
            <Text style={styles.title}>{greet},</Text>
            <Text style={styles.subTitle}>{name}</Text>
          </View>
        </View>
        <View>
          <Text onPress={() => navigation.openDrawer()}>
            <AntDesign name="menu-unfold" size={24} color="black" />
          </Text>
        </View>
      </>
      }
      {
        (profile && !toc) &&
          <View style={{width:"100%", alignItems:"center"}}>
            <View style={{width:"90%",flexDirection:"row", justifyContent:"space-between"}}>
              <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{fontWeight:"bold"}}>
                  Edit
                </Text>
              </View>
              <View>
                <Text style={{fontWeight:"bold", color:"#468189"}}>
                  Done
                </Text>
              </View>
            </View>
          </View>
      }
      {
          toc &&
          <View style={{width:"100%", alignItems:"center"}}>
            <View style={{width:"90%",flexDirection:"row", justifyContent:"space-between"}}>
              <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{fontWeight:"bold"}}>
                  {tocTitle}
                </Text>
              </View>
              <View>
                <Text style={{fontWeight:"bold", color:"#468189"}}>

                </Text>
              </View>
            </View>
          </View>
      }
      {
          (!profile && !toc && notification) &&
          <View style={{width:"100%", alignItems:"center"}}>
            <View style={{width:"90%",flexDirection:"row", justifyContent:"space-between"}}>
              <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{fontWeight:"bold"}}>
                  Notification
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationSettings')}>
                  <MaterialIcons name="settings-input-component" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
      }
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2D2D2D",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D2D2D",
  },

  headerBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical:10
  },
  profileImage: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
