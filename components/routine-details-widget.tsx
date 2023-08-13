import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RoutineDetailsWidget = ({routineDetails}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>{routineDetails.name}</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A930',
    flexDirection: 'column',
    borderRadius: 15,
    padding: 7,
    marginBottom: 7,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    height: 25,
  },
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 2,
    flexDirection: 'row',
    padding: 8,
  },
  volumeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 10,
    color: '#ffffff80',
  },
  valueText: {
    fontSize: 12,
    color: 'white',
  },
});

export default RoutineDetailsWidget;
