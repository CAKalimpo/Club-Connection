import React from 'react';
import { View } from 'react-native';
import PreviewBlindStructure from './PreviewBlindStructure';

const BlindStructure = () => {
  const gameTime = 1800; 
  let raiseBlindTime = 180; 

  return (
    <View style={{ flex: 1 }}>
      <PreviewBlindStructure gameTime={gameTime} raiseBlindTime={raiseBlindTime} />
      
    </View>
  );
}

export default BlindStructure;
