import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  Pressable,
} from 'react-native';
import {BODY_PARTS} from '../mock-data/exercise-data';

const gluteIcon = require('../assets/glutes.png');

const ExerciseHome = (): JSX.Element => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const ITEMSIZE = 84;

  const onPress = () => {
    console.log('button Pressed');
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
                <Text style={styles.text}>Test </Text>
              </Animated.View>
            );
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={[styles.button, {backgroundColor: '#319AE5'}]}
          onPress={onPress}>
          <Text style={styles.buttonText}>My Routines</Text>
        </Pressable>
        <Pressable
          style={[styles.button, {backgroundColor: '#E44040'}]}
          onPress={onPress}>
          <Text style={styles.buttonText}>Build Workout Routine</Text>
        </Pressable>
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
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default ExerciseHome;
