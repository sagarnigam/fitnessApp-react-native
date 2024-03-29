import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomNavigation from './components/navigations/bottom-navigation';
import {getAuthenticatedUser} from './services/authentication-service';

const App = (): JSX.Element => {
  // getAuthenticatedUser();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.scrollarea}>
          <NavigationContainer>
            <BottomNavigation />
          </NavigationContainer>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#09131F',
  },
  scrollarea: {
    flex: 1,
  },
});

export default App;
