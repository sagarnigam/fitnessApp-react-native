import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SetWidget from './set-widget';

const LogExerciseWidget = ({exerciseDetails}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.text}>{exerciseDetails.name}</Text>
      </View>
      <View style={styles.setDetailsContainer}>
        <View style={styles.setDetailsHeadings}>
          <View style={styles.setDetailsSubContainer}>
            <Text style={styles.setDetailsText}></Text>
          </View>
          <View style={styles.setDetailsSubContainer}>
            <Text style={styles.setDetailsText}>Weight (Kgs)</Text>
          </View>
          <View style={styles.setDetailsSubContainer}>
            <Text style={styles.setDetailsText}>Reps</Text>
          </View>
        </View>
        {Object.keys(exerciseDetails.sets).map(setNo => (
          <SetWidget
            SetDetails={{setNo: setNo, setReps: exerciseDetails.sets[setNo]}}
          />
        ))}
      </View>
    </View>
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
    fontSize: 20,
    color: 'white',
  },
  headingContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 5,
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
    fontSize: 14,
    color: '#ffffff80',
  },
  setDetailsSubContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default LogExerciseWidget;
