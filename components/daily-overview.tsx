import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import NutritionalOverview from './nutritional-overview';

const DailyOverview = (): JSX.Element => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingLg}>Today's Calories</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.volumeContainer}>
            <Text style={styles.headingSm}>Target</Text>
            <Text style={styles.headingMd}>2800 cal</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.headingSm}>Consumed</Text>
            <Text style={styles.headingMd}>1850 cal</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.headingSm}>Remaining</Text>
            <Text style={styles.headingMd}>950 cal</Text>
          </View>
        </View>
      </View>
      <NutritionalOverview />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A930',
    marginBottom: 0,
    flexDirection: 'column',
    padding: 5,
    borderRadius: 15,
  },
  headingLg: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  headingContainer: {
    flex: 1,
    paddingTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  volumeContainer: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingSm: {
    fontSize: 10,
    color: '#ffffff80',
  },
  headingMd: {
    fontSize: 12,
    color: 'white',
  },
});

export default DailyOverview;
