import React from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import WorkoutDay from '../components/workout-day';
import RoutineDetailsWidget from '../components/routine-details-widget';

const RoutineSchedule = (props): JSX.Element => {
  const navigateTo = (item): void => {
    props.navigation.navigate('workoutSchedule', item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <RoutineDetailsWidget routineDetails={props.route.params} />
      </View>
      <View style={styles.daysContainer}>
        <ScrollView>
          {Object.keys(props.route.params.exercise).map(item => (
            <TouchableOpacity onPress={() => navigateTo(props.route.params)}>
              <WorkoutDay workoutDay={item} />
            </TouchableOpacity>
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
});

export default RoutineSchedule;
