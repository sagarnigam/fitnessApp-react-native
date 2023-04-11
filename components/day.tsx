import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WorkoutDay = ({workoutDayNo}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>Day {workoutDayNo}</Text>
      </View>
      <View style={styles.actionContainer}>
        <Text style={styles.text}>{'>'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A930',
    margin: 8,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headingContainer: {
    flex: 1,
    padding: 7,
  },
  actionContainer: {
    flex: 2,
    alignItems: 'flex-end',
    padding: 7,
  },
});

export default WorkoutDay;
