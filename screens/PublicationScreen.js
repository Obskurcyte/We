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

  const pickedimage = props.route.params.pickedimage;

  console.log(pickedimage)
  return (
    <Root>
      <View>
        <View style={styles.imagePicker}>
          <View style={styles.imagePreview}>
            <Image style={styles.imagePhoto} source={{uri: pickedimage}}/>
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
