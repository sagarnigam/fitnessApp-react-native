import {StyleSheet, Text, View} from 'react-native';

const DailyOverview = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello to Overview</Text>
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

export default DailyOverview;
