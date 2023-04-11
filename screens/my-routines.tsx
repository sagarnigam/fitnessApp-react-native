import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';

import Routine from '../components/routine';
import {RoutineInfo} from '../models/routines';
import {getRoutineData} from '../services/routine-service';

const MyRoutines = ({navigation}): JSX.Element => {
  const [routineData, setRoutineData] = useState<RoutineInfo[]>([]);

  const navigateToWorkout = (item): void => {
    navigation.navigate('workout', item);
  };

  useEffect(() => {
    setRoutineData(getRoutineData());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {routineData.map(item => (
          <TouchableOpacity onPress={() => navigateToWorkout(item)}>
            <Routine routineDetails={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#09131F',
    paddingTop: 100,
    paddingBottom: 70,
  },
  scrollContainer: {
    width: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MyRoutines;
