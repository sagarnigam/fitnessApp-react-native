import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Home from '../../screens/home';

// Constants
import {
  HOME_ROUTE_NAME,
  WORKOUT_HOME_ROUTE_NAME,
} from '../../constant/route-names';
import WorkoutHomeNavigationStack from './workout-home-navigation-stack';

// icons

const homeIcon = require('../assets/home.png');
const excerciseIcon = require('../assets/excercise.png');

const Tab = createBottomTabNavigator();

const BottomNavigation = (): JSX.Element => {
  const screenOptions = ({route}) => ({
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarShowLabel: false,
    tabBarStyle: styles.bottomNavigation,
  });

  const commonRouteOptions = {
    headerTransparent: true,
    title: '',
  };

  return (
    <Tab.Navigator
      initialRouteName={HOME_ROUTE_NAME}
      screenOptions={screenOptions}>
      <Tab.Screen
        name={HOME_ROUTE_NAME}
        component={Home}
        options={commonRouteOptions}
      />
      <Tab.Screen
        name={WORKOUT_HOME_ROUTE_NAME}
        component={WorkoutHomeNavigationStack}
        options={commonRouteOptions}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#09131F',
    height: 45,
  },
});

export default BottomNavigation;
