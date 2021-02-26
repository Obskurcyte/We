import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { Formik } from 'formik';

const FormulaireScreen = props => {

  const initialValues = {
    prenom: '',
    nom: '',
    pays: '',
    email: ''
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.information}>Informations</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', marginBottom: '5%'}}>Pour publier votre photo veuillez remplir ce formulaire</Text>
        <View>
          <Formik
            initialValues={initialValues}
            onSubmit={values => {
            console.log(values)
              }
            }
          >
            {props => (
              <View>
                <TextInput
                  placeholder="Prénom"
                  style={styles.place}
                  onChangeText={props.handleChange('prenom')}
                  value={props.values.prenom}
                />
                <TextInput
                  placeholder="Nom"
                  style={styles.place}
                  onChangeText={props.handleChange('Nom')}
                  value={props.values.nom}
                />
                <TextInput
                  placeholder="Pays"
                  style={styles.place}
                  onChangeText={props.handleChange('pays')}
                  value={props.values.pays}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.place}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
                <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                  <Text style={{fontSize: 14, textAlign: 'center'}}>Publiez</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
        <Image
          source={require('../assets/logo_epure.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEA2D',
    flex: 1,
    paddingHorizontal: 20
  },
  information: {
    fontSize: 20.04,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '25%'
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '55%',
    fontSize: 14,
    textAlign: 'center',
    marginTop: '10%',
    marginLeft: '18%'
  },
  place: {
    borderColor: "black",
    borderWidth: 2,
    height: '14%',
    marginTop: 5,
    paddingHorizontal: 5
  },
  innerContainer: {
    marginTop: '20%'
  }
});

export default FormulaireScreen
