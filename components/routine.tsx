import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Routine = ({routineDetails}): JSX.Element => {
  return (
    <TouchableOpacity>
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
            <Text style={styles.valueText}>250</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A930',
    margin: 8,
    flexDirection: 'column',
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headingContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 5,
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
    fontSize: 14,
    color: '#ffffff80',
  },
  valueText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Routine;
