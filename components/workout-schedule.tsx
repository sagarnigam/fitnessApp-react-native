import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Divider} from '@rneui/themed';

import ExerciseDetailsWidget from './exercise-details-widgets';
import ProgramOverviewWidget from './program-details-widget';

const WorkoutSchedule = (props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <ProgramOverviewWidget programDetails={props.route.params.props} />
      </View>
      <Divider inset={true} insetType="middle" />
      <View style={styles.daysContainer}>
        <ScrollView>
          {props.route.params.props.exercise[
            props.route.params.selectedDay
          ].map(exercise => (
            <ExerciseDetailsWidget exerciseDetails={exercise} />
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
  detailsContainer: {
    flex: 1,
  },
  daysContainer: {
    flex: 4,
  },
});

export default WorkoutSchedule;
