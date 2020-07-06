import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 150,
    marginTop: 10,
    backgroundColor: "#087afc",
  },
  buttonText: {
    
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 14,
    textAlign: "center",
  },
});
