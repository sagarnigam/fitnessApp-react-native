import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyRoutines from '../../screens/my-routines';
import WorkoutSchedule from '../workout-schedule';
import RoutineSchedule from '../../screens/routine-schedule';
import ExerciseHome from '../exercise-home';

const Stack = createNativeStackNavigator();

const WorkoutHomeNavigationStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="exerciseHome"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="exerciseHome" component={ExerciseHome} />
      <Stack.Screen name="routines" component={MyRoutines} />
      <Stack.Screen name="routineSchedule" component={RoutineSchedule} />
      <Stack.Screen name="workoutSchedule" component={WorkoutSchedule} />
    </Stack.Navigator>
  );
};

export default WorkoutHomeNavigationStack;
