import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNav from "./navigators/Navigator";

import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(config);

function App() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);