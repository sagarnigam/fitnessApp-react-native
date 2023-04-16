import React from 'react';
import {StyleSheet, View} from 'react-native';
import IndividualExercise from './individual-exercise';
import {Divider} from '@rneui/themed';

const ExerciseDetailsWidget = ({exerciseDetails}): JSX.Element => {
  return (
    <View style={styles.diffContainer}>
      <View
        style={[
          styles.colorContainer,
          exerciseDetails.type === 'normal'
            ? styles.normalExerciseColor
            : exerciseDetails.type === 'superset'
            ? styles.supsetExerciseColor
            : styles.gaintExerciseColor,
        ]}></View>
      <View style={styles.container}>
        {exerciseDetails.type === 'normal' ? (
          <IndividualExercise exerciseDetails={exerciseDetails} />
        ) : (
          exerciseDetails.exercise.map(exercise => (
            <IndividualExercise exerciseDetails={exercise} />
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  diffContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  normalExerciseColor: {
    backgroundColor: 'red',
  },
  supsetExerciseColor: {
    backgroundColor: 'skyblue',
  },
  gaintExerciseColor: {
    backgroundColor: 'lightgreen',
  },
  colorContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 15,
  },
  container: {
    flex: 20,
    backgroundColor: '#A9A9A930',
    margin: 8,
    flexDirection: 'column',
    padding: 10,
    borderRadius: 15,
  },
});

export default ExerciseDetailsWidget;
