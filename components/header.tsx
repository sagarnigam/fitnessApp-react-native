import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Sans-Serif',
    textAlign: 'center',
  },
});

export default Header;
