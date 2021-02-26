import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {PhotoNavigator} from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBxoT8tu9xqb0ISQdLHprp0cCZHzwLcPVI",
  authDomain: "weapp-69657.firebaseapp.com",
  projectId: "weapp-69657",
  storageBucket: "weapp-69657.appspot.com",
  messagingSenderId: "899297492752",
  appId: "1:899297492752:web:b7063d8da1d38abb54ef95",
  measurementId: "G-BCWN3FMQP7"
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


export default function App() {
  return (
    <NavigationContainer>
      <PhotoNavigator />
    </NavigationContainer>

  );
}
