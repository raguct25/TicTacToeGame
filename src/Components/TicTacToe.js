import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class TicTacToe extends Component {
  render() {
    const { name, fontStyle } = this.props;
    return (
      <View>
        <TouchableOpacity {...this.props}>
          <Text style={fontStyle}>{typeof name == "string" ? name : ""}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TicTacToe;
