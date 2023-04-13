import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Divider} from '@rneui/themed';

import ExerciseWidget from './exercise-widget';
import RoutineDetailsWidget from './routine-details-widget';

const WorkoutSchedule = (props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <RoutineDetailsWidget routineDetails={props.route.params.props} />
      </View>
      <Divider inset={true} insetType="middle" />
      <View style={styles.daysContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {props.route.params.props.exercise[
            props.route.params.selectedDay
          ].map(exercise => (
            <ExerciseWidget exerciseDetails={exercise} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09131F',
    flexDirection: 'column',
    paddingTop: 100,
    paddingBottom: 70,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsContainer: {
    flex: 1,
  },
  daysContainer: {
    flex: 4,
  },
  scrollContainer: {},
});

export default WorkoutSchedule;
