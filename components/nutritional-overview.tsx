import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NutritionalOverview = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.volumeContainer}>
        <Text style={styles.detailsText}>Protien</Text>
        <Text style={styles.valueText}>165 g</Text>
      </View>
      <View style={styles.volumeContainer}>
        <Text style={styles.detailsText}>Carbohydrates</Text>
        <Text style={styles.valueText}>100 g</Text>
      </View>
      <View style={styles.volumeContainer}>
        <Text style={styles.detailsText}>Fats</Text>
        <Text style={styles.valueText}>100 g</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A910',
    marginTop: 0,
    flexDirection: 'row',
    padding: 3,
    paddingBottom: 5,
    borderRadius: 15,
  },
  volumeContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 10,
    color: '#ffffff80',
  },
  valueText: {
    fontSize: 14,
    color: 'white',
  },
});

export default NutritionalOverview;
