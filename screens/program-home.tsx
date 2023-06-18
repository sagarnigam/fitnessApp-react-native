import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  Text,
} from 'react-native';
import ProgramOverviewWidget from '../components/program-details-widget';

import {RoutineInfo} from '../models/routines';
import {getRoutineData} from '../services/routine-service';

const ProgramHome = ({navigation}): JSX.Element => {
  const [routineData, setRoutineData] = useState<RoutineInfo[]>([]);

  const navigateTo = (item: RoutineInfo): void => {
    navigation.navigate('routineSchedule', item);
  };

  useEffect(() => {
    setRoutineData(getRoutineData());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text>kshdkjsadjkasdhk</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#09131F',
    paddingTop: 70,
    paddingBottom: 70,
  },
  scrollContainer: {
    width: '100%',
  },
});

export default ProgramHome;
