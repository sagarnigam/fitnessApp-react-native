import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';

import RoutineDetailsWidget from '../components/routine-details-widget';
import {RoutineInfo} from '../models/routines';
import {getRoutineData} from '../services/routine-service';

const MyRoutines = ({navigation}): JSX.Element => {
  const [routineData, setRoutineData] = useState<RoutineInfo[]>([]);

  const navigateTo = (item): void => {
    navigation.navigate('routineSchedule', item);
  };

  useEffect(() => {
    setRoutineData(getRoutineData());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {routineData.map(item => (
          <TouchableOpacity onPress={() => navigateTo(item)}>
            <RoutineDetailsWidget routineDetails={item} />
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
});

export default MyRoutines;
