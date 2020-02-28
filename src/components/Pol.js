import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Pol = () => (
  <Image source={require('../assets/Pol.jpg')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginBottom: 12,
    alignContent: "center",
  },
});

export default memo(Pol);
