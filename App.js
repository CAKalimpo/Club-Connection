import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BlindStructure from './src/screens/BlindStructure';
import LinearGradient from 'react-native-linear-gradient';
import PreviewBlindStructure from './src/screens/PreviewBlindStructure';
import { Image } from 'react-native';
import { Fonts } from './src/CustomFonts';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blind Structure" component={BlindStructure} />
        <Stack.Screen name="Preview Blinds Structure" 
        component={PreviewBlindStructure}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#D875C7', '#8576FF']} 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1}}
              />
            ),
            headerTintColor: '#fff',
            headerBackImage: () => (
              <Image
                source={require('./assets/imgs/arrowback.png')}
                style={{ width: 26, height: 24, marginLeft: 10 }}
              />
            ),
            headerTitleStyle: {
              fontSize: 18,
              fontFamily: Fonts.ISMS,
              letterSpacing: 1
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
