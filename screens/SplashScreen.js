import React from 'react';
import Colors from "../constants/Colors";
import {
  View,
  Text,
  Image
} from "react-native";
import {StyleSheet} from "react-native";
const SplashScreen = props => {
    return(
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/logo_noir.jpeg')}
          />
        </View>
        <Text style={styles.text}>Women equality</Text>
      </View>
    )
};

const styles = StyleSheet.create({
    container : {
      backgroundColor: Colors.primaryColor
  }
});


export default SplashScreen;
