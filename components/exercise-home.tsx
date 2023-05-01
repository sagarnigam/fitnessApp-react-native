import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {BODY_PARTS} from '../mock-data/exercise-data';

const gluteIcon = require('../assets/glutes.png');

const ExerciseHome = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList
        data={BODY_PARTS}
        keyExtractor={item => item.key}
        contentContainerStyle={{
          padding: 8,
        }}
        renderItem={item => {
          return (
            <View style={styles.exercisePill}>
              <Text style={styles.text}>{item.item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 70,
    backgroundColor: '#09131F',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  exercisePill: {},
});

export default ExerciseHome;
