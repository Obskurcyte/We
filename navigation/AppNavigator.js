import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FluxScreen from "../screens/FluxScreen";
import PartenairesScreen from "../screens/PartenairesScreen";
import OnboardingScreen from "../screens/OnBoardingScreen";
import PublicationScreen from "../screens/PublicationScreen";
import FormulaireScreen from "../screens/FormulaireScreen";
import RecapScreenPubli from "../screens/RecapScreenPubli";

const PhotoStackNavigator = createStackNavigator();

export const PhotoNavigator = props => {
  return (
    <PhotoStackNavigator.Navigator>
      <PhotoStackNavigator.Screen
        name="OnBoardingScreen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <PhotoStackNavigator.Screen
        name="FormulaireScreen"
        component={FormulaireScreen}
        options={{ headerShown: false }}

      />

      <PhotoStackNavigator.Screen
        name="RecapScreenPubli"
        component={RecapScreenPubli}
        options={{ headerShown: false }}

      />
      <PhotoStackNavigator.Screen
        name="FluxScreen"
        component={FluxScreen}
        options={{
          title: 'LIVE',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTitleAlign: 'center'
        }}

      />
      <PhotoStackNavigator.Screen
        name="PublicationScreen"
        component={PublicationScreen}
        options={{
          title: 'PUBLICATION',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTitleAlign: 'center'
        }}

      />
      <PhotoStackNavigator.Screen
        name="PartenairesScreen"
        component={PartenairesScreen}


      />

    </PhotoStackNavigator.Navigator>
  )
}
