import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fonts } from '../CustomFonts';

const PreviewBlindStructure = ({ gameTime, raiseBlindTime }) => {
  const [currentBlindIndex, setCurrentBlindIndex] = useState(0);
  const [blindStructure, setBlindStructure] = useState([]);

  useEffect(() => {
    const computeBlindStructure = () => {
      const levels = Math.floor(gameTime / raiseBlindTime);
      const structure = [];
      let bigBlind = 1;
      let currentTime = 180; // Start time from 03:00

      for (let i = 0; i < levels; i++) {
        const level = i + 1;
        const timeHours = Math.floor(currentTime / 60);
        const timeMinutes = currentTime % 60;
        const timeString = `${timeHours.toString().padStart(2, '0')}:${timeMinutes.toString().padStart(2, '0')}`;
        const blinds = `${bigBlind}/${bigBlind * 2}`;

        structure.push({ level, timeString, blinds });

        bigBlind *= 2;
        currentTime += raiseBlindTime;
      }

      return structure;
    };
    setBlindStructure(computeBlindStructure());

    const timer = setInterval(() => {
      setCurrentBlindIndex(prevIndex => prevIndex + 1);
    }, raiseBlindTime * 1000); // Convert raiseBlindTime from seconds to milliseconds

    return () => clearInterval(timer); 
  }, [gameTime, raiseBlindTime]);

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
          <Text style={[styles.data, styles.dataCenter]}>{blind.timeString}</Text>
          <Text style={[styles.data, styles.dataRight]}>{blind.blinds}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Fonts.ISMR,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  data: {
    color: 'black',
    textAlign: 'left',
    flex: 1,
    fontSize: 15,
    fontFamily: Fonts.SFPro,
  },
  dataCenter: {
    textAlign: 'center',
  },
  dataRight: {
    textAlign: 'right',
  },
});

export default PreviewBlindStructure;
