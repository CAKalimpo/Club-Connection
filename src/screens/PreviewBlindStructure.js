import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import blindStructureData from '../data.json';

const PreviewBlindStructure = ({ gameTime, raiseBlindTime }) => {
  const [currentBlindIndex, setCurrentBlindIndex] = useState(0);
  const [showNextBlind, setShowNextBlind] = useState(false);

  const blindStructure = blindStructureData;

  useEffect(() => {
    const timer = setInterval(() => {
      if (showNextBlind) {
        setCurrentBlindIndex(prevIndex => prevIndex + 1);
      }
    }, 15000);

    setTimeout(() => {
      setShowNextBlind(true);
    }, 15000);

    return () => clearInterval(timer);

  }, [showNextBlind]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, { color: '#1987FF' }]}>Level</Text>
        <Text style={styles.headerText}>Time</Text>
        <Text style={styles.headerText}>Blinds</Text>
      </View>
      {blindStructure.slice(0, currentBlindIndex + 1).map((blind, index) => (
        <View style={styles.row} key={blind.level}>
          <Text style={[styles.data, { color: '#1987FF' }]}>{blind.level}</Text>
          <Text style={[styles.data, styles.dataCenter]}>{blind.duration.hours.toString().padStart(2, '0')}:{blind.duration.minutes.toString().padStart(2, '0')}</Text>
          <Text style={[styles.data, styles.dataRight]}>{blind.bigBlind}</Text>
        </View>
      ))}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E1D9',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E3E1D9',
    paddingHorizontal: 10,
    paddingVertical: 10,    
  },
  headerText: {
    color: 'black',
    textAlign: 'center', // Center align the header text
    fontSize: 20,
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C7C8CC',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  data: {
    color: 'black',
    textAlign: 'left', // Align data text to the left by default
    flex: 1,
    fontSize: 20,

  },
  dataCenter: {
    textAlign: 'center', // Center align the time data
  },
  dataRight: {
    textAlign: 'right', // Align the blinds data to the right
  },
});

export default PreviewBlindStructure;
