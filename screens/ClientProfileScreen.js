import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import userImage from "../assets/client.png";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { RNS3 } from "react-native-aws3";

const ClientProfileScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [filePath, setFilePath] = useState({});
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result?.cancelled) {
      setImage(result?.uri);

      if (image) {
        const fileName = image?.split("/").reverse()[0];
        const fileFormat = fileName?.split(".").reverse()[0];
        const fileType = `${result?.type}/${fileFormat}`;

        uploadFile(image, fileName, fileType);
      }
    }
  };

  const uploadFile = (uri, fileName, fileType) => {
    if (!uri) {
      alert("Please select image first");
      return;
    }
    RNS3.put(
      {
        uri: uri,
        name: fileName,
        type: fileType,
      },
      {
        keyPrefix: "media",
        bucket: "linkme-development",
        region: "ap-southeast-2",
        accessKey: "AKIAZD7H7YRL4LPP3Q3Q",
        secretKey: "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",
        successActionStatus: 201,
      }
    )
      .progress((progress) => {
        setUploadSuccessMessage(
          `Uploading: ${progress.loaded / progress.total} (${
            progress.percent
          }%)`
        );
      })
      .then((response) => {
        console.log("Response===========", response);
        if (response.status !== 201) {
          setUploadSuccessMessage("");
          setImage("");
          alert("Failed to upload image to S3");
          return;
        }
        console.log("Success===========", response.body);
        let { bucket, etag, key, location } = response.body.postResponse;
        setUploadSuccessMessage(
          `Uploaded Successfully: 
          \n1. bucket => ${bucket}
          \n2. etag => ${etag}
          \n3. key => ${key}
          \n4. location => ${location}`
        );
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent navigation={navigation} profile />

        <View style={{ position: "relative", alignItems: "center" }}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 75, height: 75, borderRadius: 75 }}
            />
          ) : (
            <Image
              source={userImage}
              style={{ width: 75, height: 75, borderRadius: 75 }}
            />
          )}

          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={30}
            color="#ffffff"
            style={{ position: "absolute", top: "30%", left: "45%" }}
            onPress={pickImage}
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 17, textAlign: "center" }}
          >
            Set New Photo
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#ADADAD",
              marginTop: 4,
              textAlign: "center",
            }}
          >
            {uploadSuccessMessage}
          </Text>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <View style={{ width: "85%", paddingVertical: 10 }}>
              <Text style={{ textAlign: "left", fontWeight: "bold" }}>
                First Name
              </Text>
            </View>
            <TextInput
              name="firstName"
              placeholder="First Name"
              keyboardType="string"
              style={styles.searchInput}
              value={"Sam"}
            />
            <AntDesign
              name="edit"
              size={24}
              color="#ADADAD"
              style={styles.adornmentIcon}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "85%", paddingVertical: 10 }}>
              <Text style={{ textAlign: "left", fontWeight: "bold" }}>
                Last Name
              </Text>
            </View>
            <TextInput
              name="lastName"
              placeholder="Last Name"
              keyboardType="string"
              style={styles.searchInput}
              value={"Samson"}
            />
            <AntDesign
              name="edit"
              size={24}
              color="#ADADAD"
              style={styles.adornmentIcon}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "85%", paddingVertical: 10 }}>
              <Text style={{ textAlign: "left", fontWeight: "bold" }}>
                Date of Birth
              </Text>
            </View>
            <TextInput
              name="dob"
              placeholder="Date of Birth"
              keyboardType="string"
              style={styles.searchInput}
              value={"2 March 2009"}
            />
            <AntDesign
              name="edit"
              size={24}
              color="#ADADAD"
              style={styles.adornmentIcon}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "85%", paddingVertical: 10 }}>
              <Text style={{ textAlign: "left", fontWeight: "bold" }}>
                Email
              </Text>
            </View>
            <TextInput
              name="email"
              placeholder="Email"
              keyboardType="string"
              style={styles.searchInput}
              value={"sample_email@example.com"}
            />
            <AntDesign
              name="edit"
              size={24}
              color="#ADADAD"
              style={styles.adornmentIcon}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "85%", paddingVertical: 10 }}>
              <Text style={{ textAlign: "left", fontWeight: "bold" }}>
                Phone
              </Text>
            </View>
            <TextInput
              name="phone"
              placeholder="Phone"
              keyboardType="string"
              style={styles.searchInput}
              value={"+0123456789"}
            />
            <AntDesign
              name="edit"
              size={24}
              color="#ADADAD"
              style={styles.adornmentIcon}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "85%", paddingVertical: 10 }}>
              <Text style={{ textAlign: "left", fontWeight: "bold" }}>
                Diagnosis
              </Text>
            </View>
            <TextInput
              name="diagnosis"
              placeholder="Diagnosis"
              keyboardType="string"
              style={styles.searchInput}
              value={"Autism"}
            />
            <AntDesign
              name="edit"
              size={24}
              color="#ADADAD"
              style={styles.adornmentIcon}
            />
          </View>
        </View>
        <View style={styles.emptySpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClientProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 50,
    position: "relative",
  },
  emptySpace: {
    height: 50,
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#F5F5F5",
    padding: 10,
    width: "90%",
    borderRadius: 10,
    paddingLeft: 50,
  },
  adornmentIcon: {
    position: "absolute",
    right: 30,
    bottom: 15,
    zIndex: 1,
  },
});
