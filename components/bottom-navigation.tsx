import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Home from '../screens/home';
import Workouts from '../screens/workouts';
import MyRoutines from '../screens/my-routines';
import News from '../screens/news';

// Constants
import {
  BUTTON_ROUTE_NAME,
  GROCERIES_ROUTE_NAME,
  HOME_ROUTE_NAME,
  NEWS_ROUTE_NAME,
  ROUTINES_ROUTE_NAME,
} from '../constanst/route-names';
import AddScreen from '../screens/addScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = (): JSX.Element => {
  const screenOptions = ({route}) => ({
    tabBarIcon: () => {
      let iconName;

      if (route.name === 'home') {
        iconName = require('../assets/home.png');
      } else if (route.name === 'routines') {
        iconName = require('../assets/excercise.png');
      } else if (route.name === 'button') {
        iconName = require('../assets/button.png');
      }  else if (route.name === 'groceries') {
        iconName = require('../assets/groceries.png');
      } else if (route.name === 'news') {
        iconName = require('../assets/news.png');
      }

      return <Image source={iconName} style={{width: 25, height: 25}} />;
    },
    tabBarShowLabel: false,
    tabBarStyle: styles.bottomNavigation,
  });

  return (
    <Tab.Navigator
      initialRouteName={HOME_ROUTE_NAME}
      screenOptions={screenOptions}>
      <Tab.Screen name={HOME_ROUTE_NAME} component={Home} />
      <Tab.Screen name={ROUTINES_ROUTE_NAME} component={MyRoutines} />
      <Tab.Screen name={BUTTON_ROUTE_NAME} component={AddScreen} />
      <Tab.Screen name={GROCERIES_ROUTE_NAME} component={MyRoutines} />
      <Tab.Screen name={NEWS_ROUTE_NAME} component={News} />
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
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 32,
    height: 32,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#09131F',
    height: 60,
  },
});

export default BottomNavigation;
