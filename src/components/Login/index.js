import React, { Component } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default class Music extends React.Component {
  render() {
    return (
      <View style={styles.block}>
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../../../src/image.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View
          style={{
            height: height / 3,
            justifyContent: "flex-start",
            backgroundColor: "red",
          }}
        ></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "white",
  },
});
