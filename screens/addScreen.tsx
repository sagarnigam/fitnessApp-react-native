import {StyleSheet, Text, View} from 'react-native';

const AddScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello to Add Screen</Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AddScreen;
