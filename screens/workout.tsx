import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import WorkoutDay from '../components/day';
import Routine from '../components/routine';

const Workouts = (props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Routine routineDetails={props.route.params} />
      </View>
      <View style={styles.daysContainer}>
        <ScrollView>
          <WorkoutDay workoutDayNo={1} />
          <WorkoutDay workoutDayNo={2} />
          <WorkoutDay workoutDayNo={3} />
          <WorkoutDay workoutDayNo={4} />
          <WorkoutDay workoutDayNo={5} />
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
});

export default Workouts;
