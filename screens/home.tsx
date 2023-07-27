import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DailyOverview from '../components/daily-overview';

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.homeContainer}>
          <View style={styles.overviewContainer}>
            <DailyOverview />
          </View>
          <View style={styles.graphContainer}>{/* <WeightChart /> */}</View>
          <View style={styles.fitDetailscontainer}>{/* <FitDetails /> */}</View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 70,
    backgroundColor: '#09131F',
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  overviewContainer: {
    flex: 1,
  },
  graphContainer: {
    flex: 1,
  },
  fitDetailscontainer: {},
});

export default Home;
