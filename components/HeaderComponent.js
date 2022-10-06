import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import user from "../assets/user.png";

const HeaderComponent = ({ navigation, greet, name, imageFile }) => {
  return (
    <View style={styles.headerBar}>
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
