import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { Feather } from '@expo/vector-icons';
import {ActionSheet, Root} from 'native-base';




const Footer = props => {
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

  const takePicture = async () => {
        const data = await camera.takePictureAsync(null);
        console.log(data.uri)
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

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Root>
    <View>
      <View style={styles.imagePicker}>
        <View style={styles.imagePreview}>
          <Image style={styles.imagePhoto} source={{uri: pickedImage}}/>
          <TouchableOpacity
            style={styles.bouton_photo}
            onPress={takeImageHandler}
          >
            <AntDesign name="pluscircle" size={70} color="black" style={styles.icon} />

          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Feather name="cloud-lightning" size={24} color="black" />
          <TouchableOpacity>
            <Text>LIVE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/profile-user.png')}
            style={styles.image}
          />
          <TouchableOpacity>
            <Text>PROFIL</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
    </Root>
  )
};

const styles = StyleSheet.create({
  bouton_photo: {
    borderRadius: 200,
    width: '25%',
    height: 100,
    position: 'relative',
    top: windowHeight/1.6,
    left: windowWidth/2.55,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
  },
  imagePhoto: {
    width: '100%',
    height: '100%'
  },
  imagePreview: {
    height: '60%',
    borderColor: "#ccc",
    borderWidth: 1
  },
  imagePicker: {
    alignItems: 'center'
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  camera: {
    flex: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  icon: {
    width: '100%'
  },
  footer : {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'relative',
    top: windowHeight/1.55,
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: '15%'
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '23%'
  }



});

export default Footer
