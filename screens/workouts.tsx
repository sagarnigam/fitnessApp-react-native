import {StyleSheet, Text, View} from 'react-native';

const Workouts = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello to workouts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Workouts;
