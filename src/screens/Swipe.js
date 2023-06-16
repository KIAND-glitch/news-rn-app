import React from 'react';
import { StyleSheet, View } from 'react-native';
import swipecards from '../components/SwipeCards';

export default function SwipeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <swipecards navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
