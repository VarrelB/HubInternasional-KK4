import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const hubint = () => (
  <Image source={require('../assets/hubint.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginBottom: 12,
    alignContent: "center",
  },
});

export default memo(hubint);
