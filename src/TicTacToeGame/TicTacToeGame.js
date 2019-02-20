import React, { Component } from "react";
import { View, Alert, Button, Text, ActivityIndicator } from "react-native";
import styles from "./TicTacToeGameStyles";
import TicTacToe from "../Components/TicTacToe";
import Constant from "../Constants";

class TicTacToeGame extends Component {
  constructor(props) {
    super(props);
    this.state = { block: [1, 2, 3, 4, 5, 6, 7, 8, 9] };
    this.player = Constant.player1;
  }

  hasWin = (block, player) =>
    (block[0] == player && block[1] == player && block[2] == player) ||
    (block[3] == player && block[4] == player && block[5] == player) ||
    (block[6] == player && block[7] == player && block[8] == player) ||
    (block[0] == player && block[3] == player && block[6] == player) ||
    (block[1] == player && block[4] == player && block[7] == player) ||
    (block[2] == player && block[5] == player && block[8] == player) ||
    (block[0] == player && block[4] == player && block[8] == player) ||
    (block[6] == player && block[4] == player && block[2] == player);

  hasDraw = block =>
    block.every(value => {
      return typeof value == "string";
    });

  hasPlaying = () =>
    this.state.block.every(value => {
      return typeof value == "number";
    });

  playersPlaying = playerName => {
    const { block } = this.state;
    let poisition = block.indexOf(playerName);
    block[poisition] = this.player;
    let updatedBlock = block;
    this.setState({ block: updatedBlock });
    this.setPlayers();
  };

  setPlayers() {
    this.trackGame(this.player);
    if (this.player == Constant.player1) {
      this.player = Constant.player2;
    } else {
      this.player = Constant.player1;
    }
  }

  trackGame = player => {
    const { block } = this.state;
    if (this.hasWin(block, player)) {
      Alert.alert(
        "TicTacToeGame",
        `${player} is winning`,
        [{ text: "OK", onPress: () => this.restartGame() }],
        { cancelable: false }
      );
    } else if (this.hasDraw(block)) {
      Alert.alert(
        "TicTacToeGame",
        "Match is Draw",
        [{ text: "OK", onPress: () => this.restartGame() }],
        { cancelable: false }
      );
    }
  };

  restartGame = () => {
    this.setState({ block: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
  };

  render() {
    const { block } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.fontStyle}>
          {this.hasPlaying() ? "" : "Playing"}
        </Text>
        <View style={styles.blockLayout}>
          {block.map((playerName, i) => {
            return (
              <TicTacToe
                key={i}
                name={playerName}
                style={styles.blocksStyle}
                fontStyle={styles.textStyle}
                disabled={typeof playerName == "string"}
                onPress={this.playersPlaying.bind(this, playerName)}
              />
            );
          })}
        </View>
        <View style={styles.restartButtonStyle}>
          <Button onPress={this.restartGame} title="Restart" color="#841584" />
        </View>
      </View>
    );
  }
}

export default TicTacToeGame;
