import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Divider} from '@rneui/themed';

import ExerciseDetailsWidget from './exercise-details-widgets';
import RoutineDetailsWidget from './routine-details-widget';
import Header from './header';

const WorkoutSchedule = (props): JSX.Element => {
  const headerText = 'Routines';

  return (
    <View style={styles.container}>
      <Header headerText={headerText} />
      <RoutineDetailsWidget routineDetails={props.route.params.props} />
      <Divider style={styles.divider} inset={true} insetType="middle" />
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
    backgroundColor: '#09131F',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 70,
  },
  detailsContainer: {
    flex: 1,
  },
  daysContainer: {
    flex: 5.5,
  },
  divider: {
    margin: 5,
    marginBottom: 12,
  },
});

export default WorkoutSchedule;
