import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Header from './components/header';
import BottomNavigation from './components/bottom-navigation';

const App = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <Header />
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
