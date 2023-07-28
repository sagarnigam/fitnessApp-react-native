import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './header';

const ExerciseHome = ({navigation}) => {
  const headerText = 'Workout Home';
  const navigateTo = (page: string) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <Header headerText={headerText} />
      <View style={styles.listContainer}>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#319AE590'}]}
          onPress={() => navigateTo('routines')}>
          <Text style={styles.buttonText}>My Routines</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#E4404090'}]}
          onPress={() => navigateTo('workout-build')}>
          <Text style={styles.buttonText}>Build Routine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 82,
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
    flexDirection: 'column',
    marginBottom: 10,
  },
  button: {
    height: 50,
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

export default ExerciseHome;
