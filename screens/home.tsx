import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DailyOverview from '../components/daily-overview';
import Header from '../components/header';

const Home = (): JSX.Element => {
  const headerText = 'Hello Sagar';

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.homeContainer}>
          <Header headerText={headerText} />
          <View style={styles.overviewContainer}>
            <DailyOverview />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    backgroundColor: '#09131F',
    paddingLeft: 15,
    paddingRight: 15,
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  overviewContainer: {
    flex: 1,
  },
});

export default Home;
