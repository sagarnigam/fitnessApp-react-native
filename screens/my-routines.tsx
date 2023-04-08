import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {RoutineInfo} from '../models/routines';
import {getRoutineData} from '../services/routine-service';

const MyRoutines = (): JSX.Element => {
  const [routineData, setRoutineData] = useState<RoutineInfo[]>([]);

  useEffect(() => {
    setRoutineData(getRoutineData());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {routineData.map(item => (
          <Text style={styles.text}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09131F',
  },
  scrollContainer: {
    marginTop: 120,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MyRoutines;
