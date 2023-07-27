import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Home from '../screens/home';

// Constants
import {HOME_ROUTE_NAME, ROUTINES_ROUTE_NAME} from '../constant/route-names';
import MyRoutineNavigationStack from './routine-navigation-stack';

// icons

const homeIcon = require('../assets/home.png');
const excerciseIcon = require('../assets/excercise.png');

const Tab = createBottomTabNavigator();

const BottomNavigation = (): JSX.Element => {
  const screenOptions = ({route}) => ({
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: () => {
      let iconName;

      if (route.name === 'home') {
        iconName = homeIcon;
      } else if (route.name === 'routines') {
        iconName = excerciseIcon;
      }
      return <Image source={iconName} style={{width: 20, height: 20}} />;
    },
    tabBarShowLabel: false,
    tabBarStyle: styles.bottomNavigation,
  });

  const commonRouteOptions = {
    headerTransparent: true,
    title: false,
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
        name={ROUTINES_ROUTE_NAME}
        component={MyRoutineNavigationStack}
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
