import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WorkoutDay = ({workoutDay}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>{workoutDay}</Text>
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
    marginBottom: 4,
    marginTop: 4,
    flexDirection: 'row',
    padding: 7,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  headingContainer: {
    flex: 1,
    padding: 6,
    paddingLeft: 12,
  },
  actionContainer: {
    flex: 2,
    alignItems: 'flex-end',
    padding: 7,
  },
});

export default WorkoutDay;
