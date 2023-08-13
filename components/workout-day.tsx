import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WorkoutDay = ({workoutDay}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>{workoutDay}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A930',
    marginBottom: 7,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  headingContainer: {
    flex: 1,
    padding: 6,
    paddingLeft: 12,
    width: '100%',
  },
});

export default WorkoutDay;
