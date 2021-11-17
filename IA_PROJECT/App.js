// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import { createNativeStackNavigator } from 'react-navigation-stack';

// createStackNavigator(RouteConfigs, StackNavigatorConfig);
// creating an instance of the stack navigator


// Custom imports
import HomeScreen from './source/view/screens/HomeScreen';
import DetailsSceeen from './source/view/screens/DetailsScreen';
import LoginScreen from './source/view/screens/LoginScreen';
import {StatusBar} from 'react-native';
import COLORS from './source/variables/colors';

// Using arrow function to describe the main App component
const App = () => {
  // const Stack = createNativeStackNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
