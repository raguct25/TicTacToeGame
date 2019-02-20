import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1b5e20"
  },
  blockLayout: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    width: 300
  },
  blocksStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#c6ff00",
    borderColor: "#bf360c",
    height: 120,
    width: 100
  },
  restartButtonStyle: {
    margin: 5,
    height: 500,
    width: 180
  },
  textStyle: {
    fontSize: 40,
    color: "#006064"
  },
  fontStyle: {
    margin: 10,
    fontSize: 40,
    color: "#e0f7fa"
  }
});
