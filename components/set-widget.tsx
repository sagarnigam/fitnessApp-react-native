import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SetWidget = ({SetDetails}): JSX.Element => {
  return (
    <View style={styles.setContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.text}>{SetDetails.setNo}</Text>
      </View>
      <View style={styles.weightContainer}>
        <Text style={styles.text}>{SetDetails.setReps[0]}</Text>
      </View>
      <View style={styles.repsContainer}>
        <Text style={styles.text}>{SetDetails.setReps[1]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  weightContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 7,
    backgroundColor: '#09131F',
    margin: 3,
    borderRadius: 11,
  },
  repsContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 7,
    margin: 3,
    backgroundColor: '#09131F',
    borderRadius: 11,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default SetWidget;
