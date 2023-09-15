import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Alert,
  ImageBackground,
  Pressable,
} from "react-native";
import { Row, Rows, Table } from "react-native-table-component";

const { width, height } = Dimensions.get("window");

const ViewShuttleLogs = () => {
  let state = {
    tableHead: ["ID", "Pickup", "Drop-off", "PAX", "DUR."],
    tableData: [
      ["0", "Bldg-87", "Bldg-6", 4, 11.54],
      ["1", "Bldg-87", "Bldg-6", 4, 11.54],
      ["2", "Bldg-87", "Bldg-6", 4, 11.54],
      ["3", "Bldg-87", "Bldg-6", 4, 11.54],
      ["4", "Bldg-87", "Bldg-6", 4, 11.54],
      ["5", "Bldg-87", "Bldg-6", 4, 11.54],
      ["6", "Bldg-87", "Bldg-6", 4, 11.54],
      ["7", "Bldg-87", "Bldg-6", 4, 11.54],
      ["8", "Bldg-87", "Bldg-6", 4, 11.54],
      ["9", "Bldg-87", "Bldg-6", 4, 11.54],
    ],
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../../src/assets/ShuttleU-BackgroundImage.jpg")} resizeMode="cover" style={styles.bImage} >
        <Text style={styles.header}>Shuttle x Logs </Text>
        <View style={styles.table}>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#000" }}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.head}
            />
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>
        </View>
        
        <Pressable style={styles.button} onPress={() =>alert("To Reserve a Ride")}><Text style={styles.text}>Edit Log</Text></Pressable>
        <Pressable style={styles.button} onPress={() =>alert("To Return to Driver Main")}><Text style={styles.text}>Return Home</Text></Pressable>
        

      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    marginTop: 50,
    textAlign: "center",
  },
  bImage: {
    height: height,
    width: width,
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    borderColor: "grey",
    borderWidth: 2.5,
    elevation: 3,
    width: 300,
    marginTop: 50,
    left: "10%"
  },
  table: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#F1f1f1",
    left: "5%"
  },
  head: {
    height: 40,
    backgroundColor: "#000",
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    paddingTop: 7,
    borderColor: "white",
    borderWidth: 0.56,
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
  },
  row: {
    height: 28,
  },
});
export default ViewShuttleLogs;
