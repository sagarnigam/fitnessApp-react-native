import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Home from '../screens/home';
import News from '../screens/news';
import AddScreen from '../screens/addScreen';

// Constants
import {
  BUTTON_ROUTE_NAME,
  GROCERIES_ROUTE_NAME,
  HOME_ROUTE_NAME,
  NEWS_ROUTE_NAME,
  WORKOUTS_ROUTE_NAME,
} from '../constant/route-names';
import WorkoutNavigationStack from './routine-navigation-stack';
import WorkoutHome from '../screens/program-home';

// icons

const homeIcon = require('../assets/home.png');
const excerciseIcon = require('../assets/excercise.png');
const buttonIcon = require('../assets/button.png');
const groceriesIcon = require('../assets/groceries.png');
const newsIcon = require('../assets/news.png');

const Tab = createBottomTabNavigator();

const BottomNavigation = (): JSX.Element => {
  const screenOptions = ({route}) => ({
    tabBarIcon: () => {
      let iconName;

      if (route.name === 'home') {
        iconName = homeIcon;
      } else if (route.name === 'workouts') {
        iconName = excerciseIcon;
      } else if (route.name === 'button') {
        iconName = buttonIcon;
      } else if (route.name === 'groceries') {
        iconName = groceriesIcon;
      } else if (route.name === 'news') {
        iconName = newsIcon;
      }
      return <Image source={iconName} style={{width: 20, height: 20}} />;
    },
    tabBarShowLabel: false,
    tabBarStyle: styles.bottomNavigation,
  });

  return (
    <Tab.Navigator
      initialRouteName={HOME_ROUTE_NAME}
      screenOptions={screenOptions}>
      <Tab.Screen
        name={HOME_ROUTE_NAME}
        component={Home}
        options={{
          headerTitle: 'Hello Sagar',
          headerTitleStyle: styles.headerTitle,
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name={WORKOUTS_ROUTE_NAME}
        component={WorkoutNavigationStack}
        options={{
          headerTitle: 'Workout Home',
          headerTitleStyle: styles.headerTitle,
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name={BUTTON_ROUTE_NAME}
        component={AddScreen}
        options={{
          headerTitle: 'Add Exercise',
          headerTitleStyle: styles.headerTitle,
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name={GROCERIES_ROUTE_NAME}
        component={WorkoutHome}
        options={{
          headerTitle: 'Grocery List',
          headerTitleStyle: styles.headerTitle,
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name={NEWS_ROUTE_NAME}
        component={News}
        options={{
          headerTitle: 'News',
          headerTitleStyle: styles.headerTitle,
          headerTransparent: true,
        }}
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
    height: 50,
  },
  text: {
    color: 'white',
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
  },
});

export default BottomNavigation;
