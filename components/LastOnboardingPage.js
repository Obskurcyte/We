import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

const LastOnboardingPage = ({ backgroundColor, iconName, title, undertitle, soustitle, handlePage}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor
      }}
    >
      <Image source={require('../assets/logo_noir.jpeg')} style={styles.image}/>
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: '5%' }}>
          {title}
        </Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>{soustitle}</Text>
      </View>
      <TouchableOpacity style={styles.bouton} onPress={handlePage}>
        <Text style={{fontWeight: 'bold', color: 'black', textAlign: 'center', fontSize: 22, marginTop: 7}}>{undertitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '40%',
    height: '20%',
    borderRadius: 120,
    position: 'relative',
    top: '-10%'
  },
  bouton: {
    backgroundColor: 'white',
    width: '50%',
    height: '6%',
    borderRadius: 30,
    position: 'relative',
    top: '12%'
  }
})

export default LastOnboardingPage;
