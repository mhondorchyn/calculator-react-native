import React from "react";
import { View, TextInput, Text, Alert } from "react-native";
import styles from "./styles";
import FlatButton from "./button";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import Music from "./index";

/**
 * LOGIN screen
 */
function cacheImage(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { isReady: false };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImage([require("../../../src/image.jpg")]);

    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return;
  }

  state = { username: "", password: "" };

  static navigationOptions = {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#444",
      height: 60,
    },
  };

  checkLogin() {
    const { username, password } = this.state;
    if (username == "Admin" && password == "12345") {
      // console.warn("Login is correct");
      this.props.navigation.navigate("Calculator");
    } else {
      Alert.alert(
        "Error",
        "Sorry, your username or password are incorrect. Please try again. ",
        [
          {
            text: "Try again",
          },
        ]
      );
    }
  }

  render() {
    const { heading, input, container } = styles;
    return (
      <View style={container}>
        <Text style={heading}>Login into the Calculator App</Text>
        <TextInput
          style={input}
          placeholder='Username'
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={input}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <FlatButton text='Login' onPress={(_) => this.checkLogin()} />
        
      </View>
    );
  }
}
