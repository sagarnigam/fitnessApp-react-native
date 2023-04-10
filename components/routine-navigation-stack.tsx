import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyRoutines from '../screens/my-routines';
import Workouts from '../screens/workout';

const Stack = createNativeStackNavigator();

const MyRoutineNavigationStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="routine"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="routine" component={MyRoutines} />
      <Stack.Screen name="workout" component={Workouts} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MyRoutineNavigationStack;
