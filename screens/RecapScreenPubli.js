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

const RecapScreenPubli = props => {

  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);



  return (
    <Root>
      <View style={styles.container}>
        <Image
          source={require("../assets/petit_logo.png")}
        />
        <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>Félicitations... votre photo est publiée</Text>
        <View style={styles.imagePicker}>
          <View style={styles.imagePreview}>
            <Image style={styles.imagePhoto} source={require('../assets/petit_logo.png')}/>
          </View>
        </View>
        <TouchableOpacity style={styles.code}>
          <Text>Entrez un code prioritaire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.partager}>
          <Text style={styles.textPartager}>Partager <Text>We</Text></Text>
        </TouchableOpacity>
        <Text><Text>We </Text>est une chaine transmettez à vos amis</Text>
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
    height: '70%',
    width: '100%',
    borderColor: "#ccc",
    borderWidth: 1
  },
  imagePicker: {
    alignItems: 'center',
    marginTop: '5%'
  },
  container: {
    flex: 1,
    backgroundColor: '#24A3A8',
    paddingHorizontal: '18%'
  },
  partager: {
    backgroundColor: 'white',
    height: '8%',
    borderRadius: 40,
    textAlign: 'center',
    paddingHorizontal: '30%',
    paddingVertical: '8%'
  },
  code: {
    borderWidth: 1,
    borderColor: 'white',
    height: '8%',
    borderRadius: 40,
    paddingHorizontal: '12%',
    paddingVertical: '8%'
  },
  textPartager: {
    fontSize: 16
  }
});

export default RecapScreenPubli;
