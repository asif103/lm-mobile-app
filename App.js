import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import StackMenu from "./screens/StackMenu";


const App = () => {
  return (
      <NavigationContainer>
        <StackMenu />
      </NavigationContainer>
  );
}
export default App

