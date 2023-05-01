import {StyleSheet, Text, View} from 'react-native';

const WeightChart = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello to Weight Chart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WeightChart;
