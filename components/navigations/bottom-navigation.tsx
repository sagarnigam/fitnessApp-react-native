import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Home from '../../screens/home';

// Constants
import {
  HOME_ROUTE_NAME,
  WORKOUT_HOME_ROUTE_NAME,
} from '../../constant/route-names';
import WorkoutHomeNavigationStack from './workout-home-navigation-stack';
import Iconic from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNavigation = (): JSX.Element => {
  const screenOptions = ({route}) => ({
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({focused}) => {
      let iconName;

      if (route.name === 'home') {
        iconName = focused ? 'ios-home' : 'ios-home-outline';
      } else if (route.name === 'workoutHome') {
        iconName = focused ? 'barbell' : 'barbell-outline';
      }
      return <Iconic name={iconName} color="white" size={20} />;
    },
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
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#A9A9A930',
    height: 50,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
});

export default BottomNavigation;
