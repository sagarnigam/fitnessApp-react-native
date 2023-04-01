import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const BottomNavigation = (): JSX.Element => {
  const [activeScreen, setActiveScreen] = useState('home');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => setActiveScreen('home')}>
        <Image style={styles.tinyLogo} source={require('../assets/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => setActiveScreen('workout')}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/excercise.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => setActiveScreen('add')}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/button.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => setActiveScreen('groceries')}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/groceries.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => setActiveScreen('news')}>
        <Image style={styles.tinyLogo} source={require('../assets/news.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 32,
    height: 32,
  },
});

export default BottomNavigation;
