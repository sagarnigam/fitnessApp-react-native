import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyRoutines from '../screens/my-routines';
import WorkoutSchedule from './workout-schedule';
import RoutineSchedule from '../screens/routine-schedule';

const Stack = createNativeStackNavigator();

const MyRoutineNavigationStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="routines"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="routines" component={MyRoutines} />
      <Stack.Screen name="routineSchedule" component={RoutineSchedule} />
      <Stack.Screen name="workoutSchedule" component={WorkoutSchedule} />
    </Stack.Navigator>
  );
};

export default MyRoutineNavigationStack;
