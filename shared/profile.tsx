import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Profile = (): JSX.Element => {
  const profileIcon = require('../assets/profile.png');
  return <Image source={profileIcon} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginRight: '10%',
    marginTop: '5%',
  },
});

export default Profile;
