import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomNavigation from './components/bottom-navigation';
import {getAuthenticatedUser} from './services/authentication-service';

const App = (): JSX.Element => {
  getAuthenticatedUser();
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
    padding: 5,
    flexDirection: 'column',
    backgroundColor: '#09131F',
  },
  scrollarea: {
    flex: 11,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
