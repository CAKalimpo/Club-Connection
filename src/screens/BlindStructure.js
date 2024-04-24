// ParentComponent.js
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container} >
      <Button
        title="Go to Blind Structure"
        onPress={() => navigation.navigate('Preview Blind Structure')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;
