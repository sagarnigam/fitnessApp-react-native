import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Profile = (): JSX.Element => {
  const profileIcon = require('../assets/profile.png');
  return <Image source={profileIcon} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    marginRight: '5%',
    marginTop: '5%',
  },
});

export default Profile;
