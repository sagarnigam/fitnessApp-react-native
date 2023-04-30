import {StyleSheet, Text, View, Image} from 'react-native';

const waterIcon = require('../assets/water-icon.png');
const heartRateIcon = require('../assets/heart-rate.png');
const stepsIcon = require('../assets/steps.png');

const FitDetails = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.waterContainer}>
        <Text style={styles.text}>Water</Text>
        <Text style={styles.text}>Consumed</Text>
        <View style={styles.waterDetails}>
          <Image source={waterIcon} />
          <Text style={styles.waterText}>9</Text>
        </View>
      </View>
      <View style={styles.physicalDetailscontainer}>
        <View style={styles.stepsContainer}>
          <Image source={stepsIcon} />
          <View style={styles.stepDetails}>
            <Text style={styles.text}>Steps</Text>
            <Text style={styles.stepDetailsText}>10000</Text>
          </View>
        </View>
        <View style={styles.heartrateContainer}>
          <Image source={heartRateIcon} />
          <View>
            <Text style={styles.hateRateText}>115</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    marginBottom: 0,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  waterContainer: {
    flex: 4,
    backgroundColor: '#319AE5',
    borderRadius: 15,
    padding: 15,
    marginRight: 3,
  },
  waterDetails: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
  },
  waterText: {
    color: 'white',
    fontSize: 50,
    marginLeft: 20,
  },
  physicalDetailscontainer: {
    flex: 5,
    flexDirection: 'column',
    marginLeft: 3,
  },
  stepsContainer: {
    flex: 1,
    backgroundColor: '#4FE54C',
    borderRadius: 15,
    padding: 15,
    marginBottom: 3,
    flexDirection: 'row',
  },
  stepDetails: {
    marginLeft: 17,
  },
  stepDetailsText: {
    fontSize: 21,
    color: 'white',
  },
  heartrateContainer: {
    flex: 1,
    backgroundColor: '#EE4B4B',
    borderRadius: 15,
    padding: 15,
    marginTop: 3,
    flexDirection: 'row',
  },
  hateRateText: {
    fontSize: 35,
    color: 'white',
    marginLeft: 17,
  },
});

export default FitDetails;
