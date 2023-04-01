import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/header';
import BottomNavigation from './components/bottom-navigation';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.scrollarea}>
        <ScrollView>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
          <Text style={styles.text}>Hello, world!</Text>
        </ScrollView>
      </View>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
