import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const FlatButton = ({ text, func }) => {
  return (
    <TouchableOpacity onPress={func}>
      <View style={style.button}>
        <Text style={style.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginTop: 25,
    borderRadius: 12,
    backgroundColor: "#88304E",
    width: 305,
    height: 65,
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontWeight: "800",
  },
});

export default FlatButton;