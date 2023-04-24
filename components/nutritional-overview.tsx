import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NutritionalOverview = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.volumeContainer}>
        <Text style={styles.detailsText}>Protien</Text>
        <Text style={styles.valueText}>165</Text>
      </View>
      <View style={styles.volumeContainer}>
        <Text style={styles.detailsText}>Carbs</Text>
        <Text style={styles.valueText}>100</Text>
      </View>
      <View style={styles.volumeContainer}>
        <Text style={styles.detailsText}>Fats</Text>
        <Text style={styles.valueText}>100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A910',
    margin: 8,
    marginTop: 0,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  volumeContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 16,
    color: '#ffffff80',
  },
  valueText: {
    fontSize: 18,
    color: 'white',
  },
});

export default NutritionalOverview;
