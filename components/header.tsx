import {StyleSheet, Text, View} from 'react-native';

const Header = (): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Hello Sagar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    padding: 11,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
  },
});

export default Header;
