import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Workouts from '../screens/workouts';
import MyRoutines from '../screens/my-routines';
import News from '../screens/news';

const Tab = createBottomTabNavigator();

const BottomNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomNavigation,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Workouts" component={Workouts} />
      <Tab.Screen name="Routine" component={MyRoutines} />
      <Tab.Screen name="News" component={News} />
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
