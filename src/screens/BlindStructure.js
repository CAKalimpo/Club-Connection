import React from 'react';
import { View, Button } from 'react-native';

const BlindStructure = ({ navigation }) => {
  const gameTime = 1800;
  let raiseBlindTime = 180;

  const handleNavigateToPreview = () => {
    navigation.navigate('Preview Blinds Structure', { gameTime, raiseBlindTime });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go to Preview Blind Structure" onPress={handleNavigateToPreview} />
    </View>
  );
}

export default BlindStructure;
