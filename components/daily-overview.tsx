import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import NutritionalOverview from './nutritional-overview';

const DailyOverview = (): JSX.Element => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.text}>Today's Calories</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.volumeContainer}>
            <Text style={styles.detailsText}>Target</Text>
            <Text style={styles.valueText}>2800 cal</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.detailsText}>Consumed</Text>
            <Text style={styles.valueText}>1850 cal</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.detailsText}>Remaining</Text>
            <Text style={styles.valueText}>950 cal</Text>
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
    margin: 8,
    marginBottom: 0,
    flexDirection: 'column',
    padding: 8,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
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
  detailsText: {
    fontSize: 10,
    color: '#ffffff80',
  },
  valueText: {
    fontSize: 14,
    color: 'white',
  },
});

export default DailyOverview;
