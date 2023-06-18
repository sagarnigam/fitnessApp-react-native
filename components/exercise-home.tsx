import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const gluteIcon = require('../assets/glutes.png');

const WorkoutHome = ({navigation}) => {
  const navigateTo = (page: string) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {/* <View style={[styles.exercisePill]}>
          <ImageBackground
            source={gluteIcon}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.text}>Glutes</Text>
          </ImageBackground>
        </View> */}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#319AE5'}]}
          onPress={() => navigateTo('my-programs')}>
          <Text style={styles.buttonText}>My Programs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#E44040'}]}
          onPress={() => navigateTo('workout-build')}>
          <Text style={styles.buttonText}>Build Workout Program</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 70,
    backgroundColor: '#09131F',
    flexDirection: 'column',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  listContainer: {
    flex: 5,
    paddingBottom: 20,
  },
  buttonsContainer: {
    flex: 1,
    padding: 8,
  },
  exercisePill: {
    backgroundColor: 'pink',
    height: 130,
    borderRadius: 15,
    margin: 4,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 6,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default WorkoutHome;
