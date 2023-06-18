import React from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import {Divider} from '@rneui/themed';

import WorkoutDay from '../components/workout-day';
import ProgramOverviewWidget from '../components/program-details-widget';

const RoutineSchedule = (props): JSX.Element => {
  console.log(props);

  const navigateTo = (item: any): void => {
    props.navigation.navigate('workoutSchedule', item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <ProgramOverviewWidget programDetails={props.route.params} />
      </View>
      <Divider inset={true} insetType="middle" />
      <View style={styles.daysContainer}>
        <ScrollView>
          {Object.keys(props.route.params.exercise).map(item => (
            <TouchableOpacity
              onPress={() =>
                navigateTo({props: props.route.params, selectedDay: item})
              }>
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
    display: 'flex',
    flex: 1,
    backgroundColor: '#09131F',
    flexDirection: 'column',
    paddingTop: 70,
    paddingBottom: 56,
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
