import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image, Dimensions, Alert} from "react-native";
import Footer from "../components/Footer";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {AntDesign, Feather} from "@expo/vector-icons";
import {ActionSheet, Root} from "native-base";
import {Camera} from "expo-camera";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PublicationScreen = props => {

  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [pickedImage, setPickedImage] = useState('')

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== 'granted') {
      Alert.alert("Vous n'avez pas la permission !")
      return false;
    }
    return true;
  }

  const takeImageHandler = async () => {
    const BUTTONS = ['Prendre une photo', 'Choisir une photo de la galerie', 'Annuler'];
    ActionSheet.show(
      {options: BUTTONS, cancelButtonIndex: 2, title: 'Choisir une photo'},
      async buttonIndex => {
        switch (buttonIndex) {
          case 0:
            const hasPermission = await verifyPermissions;
            if (!hasPermission) {
              return;
            }
            const image = await ImagePicker.launchCameraAsync({
              aspect: [1, 1],
              allowsEditing: false,
              quality: 1
            });

            setPickedImage(image.uri)
            break;
          case 1:
            const hasPermission1 = await verifyPermissions;
            if (!hasPermission1) {
              return;
            }
            const image1 = await ImagePicker.launchImageLibraryAsync({
              aspect: [1, 1],
              allowsEditing: false,
              quality: 1
            });
            setPickedImage(image1.uri)
        }
      })}

  return (
    <Root>
      <View>
        <View style={styles.imagePicker}>
          <View style={styles.imagePreview}>
            <Image style={styles.imagePhoto} source={{uri: pickedImage}}/>
          </View>
        </View>
      </View>
    </Root>
  )
};


const styles = StyleSheet.create({
  imagePhoto: {
    width: '100%',
    height: '100%'
  },
  imagePreview: {
    height: '90%',
    width: '90%',
    borderColor: "#ccc",
    borderWidth: 1
  },
  imagePicker: {
    alignItems: 'center',
    marginTop: '5%'
  },
});

export default PublicationScreen;
