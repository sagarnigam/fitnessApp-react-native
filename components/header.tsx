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
    height: 70,
    padding: 11,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
  },
});

export default Header;
