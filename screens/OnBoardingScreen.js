import React, {useRef} from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Page from '../components/Page';
import LastOnboardingPage from "../components/LastOnboardingPage";
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {

  const pagerRef = useRef(1);

  const navigation = useNavigation();

 /* const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };
  */

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="#D3336B"
            title="Une exposition mondiale pour soutenir l'égalité entre femmes et hommes"
            undertitle="Suivant"
          //  handlePage={handlePageChange(1)}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#37A7AA"
            title="Envoyer une photo de vous avec votre nom et votre pays"
            soustitle="elle sera diffusée sur l'application, le site et dans de multiples lieux d'expositions"
            undertitle="Suivant"
          //  handlePage={handlePageChange(2)}
          />
        </View>
        <View key="3">
          <LastOnboardingPage
            backgroundColor="#FFEA2D"
            title="Participez à l'exposition mondiale pour l'égalité des femmes"
            soustitle="Une expérience artistique pour soutenir l'égalité des femmes"
            undertitle="Démarrer"
            handlePage={() => navigation.navigate('RecapScreenPubli')}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default OnboardingScreen;

