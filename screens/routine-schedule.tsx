import React from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import {Divider} from '@rneui/themed';

import WorkoutDay from '../components/workout-day';
import RoutineDetailsWidget from '../components/routine-details-widget';
import Header from '../components/header';

const RoutineSchedule = (props): JSX.Element => {
  const headerText = 'Routines';
  const navigateTo = (item): void => {
    props.navigation.navigate('workoutSchedule', item);
  };

  return (
    <View style={styles.container}>
      <Header headerText={headerText} />
      <RoutineDetailsWidget routineDetails={props.route.params} />
      <Divider style={styles.divider} inset={true} insetType="middle" />
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

export default RoutineSchedule;
