import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Components
import Login from "./src/components/Login/Login";
import Calculator from "./src/components/Calculator/Calculator";
// import Profile from "./src/components/Profile/Profile";

const Navigator = createStackNavigator({
  Login: { screen: Login },
  Calculator: { screen: Calculator },
  // Profile: { screen: Profile },
});

const App = createAppContainer(Navigator);

export default App;
