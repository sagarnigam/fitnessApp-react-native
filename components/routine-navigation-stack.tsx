import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WorkoutSchedule from './workout-schedule';
import RoutineSchedule from '../screens/routine-schedule';
import ProgramHome from '../screens/program-home';
import WorkoutHome from './exercise-home';

const Stack = createNativeStackNavigator();

const WorkoutNavigationStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="workout-home"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="workout-home" component={WorkoutHome} />
      <Stack.Screen name="my-programs" component={ProgramHome} />
      <Stack.Screen name="routineSchedule" component={RoutineSchedule} />
      <Stack.Screen name="workoutSchedule" component={WorkoutSchedule} />
    </Stack.Navigator>
  );
};

export default WorkoutNavigationStack;
