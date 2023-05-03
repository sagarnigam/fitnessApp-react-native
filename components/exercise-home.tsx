import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {BODY_PARTS} from '../mock-data/exercise-data';

const gluteIcon = require('../assets/glutes.png');

const ExerciseHome = ({navigation}): JSX.Element => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const ITEMSIZE = 150;

  const navigateTo = (): void => {
    navigation.navigate('routines');
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Animated.FlatList
          data={BODY_PARTS}
          keyExtractor={item => item.key}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          contentContainerStyle={{
            padding: 4,
          }}
          renderItem={({item, index}) => {
            const inputRange = [
              -1,
              0,
              ITEMSIZE * index,
              ITEMSIZE * (index + 2),
            ];
            const opacityInputRange = [
              -1,
              0,
              ITEMSIZE * index,
              ITEMSIZE * (index + 1),
            ];
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });
            const opacity = scrollY.interpolate({
              inputRange: opacityInputRange,
              outputRange: [1, 1, 1, 0],
            });
            return (
              <Animated.View
                style={[
                  styles.exercisePill,
                  {transform: [{scale}], opacity: opacity},
                ]}>
                <ImageBackground
                  source={gluteIcon}
                  resizeMode="cover"
                  style={styles.image}>
                  <Text style={styles.text}>{item.name}</Text>
                </ImageBackground>
              </Animated.View>
            );
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#319AE5'}]}
          onPress={() => navigateTo()}>
          <Text style={styles.buttonText}>Build Workout Routine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#E44040'}]}
          onPress={() => navigateTo()}>
          <Text style={styles.buttonText}>Build Workout Routine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 6,
  },
  buttonText: {
    fontSize: 16,
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
