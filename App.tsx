import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import RootStack from "./src/stacks/RootStack";
import MainStack from "./src/stacks/MainStack";

const LandingStack = createStackNavigator();

const auth: boolean = false;

export default function App() {
  return (
    <NavigationContainer>
      {auth ? <MainStack /> : <RootStack />}
    </NavigationContainer>
  );
}
