import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import styles from "../Login/styles";
import { NavigationEvents } from "react-navigation";

export default class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
    };
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text> </Text>
        <Button title='go to Login screen' onPress={() => navigate("Login")} />
      </View>
    );
  }
}
