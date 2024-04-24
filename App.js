import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BlindStructure from './src/screens/BlindStructure';
import LinearGradient from 'react-native-linear-gradient';
import PreviewBlindStructure from './src/screens/PreviewBlindStructure';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blind Structure" component={BlindStructure} />
        <Stack.Screen name="Preview Blind Structure" 
        component={PreviewBlindStructure}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#D875C7', '#8576FF']} // Pink to Blue
                start={{ x: 0, y: 0 }} // From top-left
                end={{ x: 1, y: 0 }} // To top-right
                style={{ flex: 1 }}
              />
            ),
            headerTintColor: '#fff', // Adjust text color if needed
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
