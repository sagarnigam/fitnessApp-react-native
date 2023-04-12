import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import RoutineDetailsWidget from './routine-details-widget';

const WorkoutSchedule = (props): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <RoutineDetailsWidget routineDetails={props.route.params} />
      </View>
      <View style={styles.daysContainer}>
        <ScrollView>
          <Text style={styles.text}>Hello to schedule</Text>
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
});

export default WorkoutSchedule;
