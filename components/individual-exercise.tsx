import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const IndividualExercise = ({exerciseDetails}): JSX.Element => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>{exerciseDetails.name}</Text>
      </View>
      <View style={styles.setDetailsContainer}>
        <View style={styles.setDetailsHeadings}>
          <View style={styles.setDetailsSubContainer}>
            <Text style={styles.setDetailsText}>
              {exerciseDetails.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  diffContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  normalExerciseColor: {
    backgroundColor: 'red',
  },
  supsetExerciseColor: {
    backgroundColor: 'skyblue',
  },
  gaintExerciseColor: {
    backgroundColor: 'lightgreen',
  },
  colorContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 15,
  },
  container: {
    flex: 20,
    backgroundColor: '#A9A9A930',
    margin: 8,
    flexDirection: 'column',
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  headingContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 5,
    alignItems: 'center',
  },
  setDetailsContainer: {
    paddingTop: 10,
    flex: 2,
    flexDirection: 'column',
  },
  setDetailsHeadings: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 7,
  },
  setDetailsText: {
    fontSize: 18,
    color: '#ffffff80',
  },
  setDetailsSubContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default IndividualExercise;
