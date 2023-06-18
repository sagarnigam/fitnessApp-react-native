import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ProgramOverviewWidget = ({programDetails}): JSX.Element => {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.text}>{programDetails.name}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.volumeContainer}>
            <Text style={styles.detailsText}>Volume</Text>
            <Text style={styles.valueText}>450 Kg</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.detailsText}>Est. Time</Text>
            <Text style={styles.valueText}>45 min</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.detailsText}>Calories</Text>
            <Text style={styles.valueText}>250 cal</Text>
          </View>
        </View>
      </View>
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
  detailsText: {
    fontSize: 10,
    color: '#ffffff80',
  },
  valueText: {
    fontSize: 14,
    color: 'white',
  },
});

export default ProgramOverviewWidget;
