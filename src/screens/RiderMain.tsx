import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Alert,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 33.513154,
  longitude: -112.125235,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const RiderMain = () => {
  let state = {
    tableHead: ["Distance", "Next Stop", "Passengers"],
    tableData: [
      ["1.2 mi", "Bldg-87", "3"],
      ["2.0 mi", "Bldg-6", "10"],
      ["0.8 mi", "Bldg-9", "1"],
      ["1.9 mi", "Bldg-22", "0"],
    ],
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Shuttle Map</Text>
      </View>
      <MapView
        style={styles.map}
        /*provider={PROVIDER_GOOGLE}*/
        initialRegion={INITIAL_POSITION}
      />

      <View style={styles.table}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#000" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
      <View style={styles.button}>
        <Button
          title="RESERVE A RIDE"
          color="black"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "90%",
    height: "60%",
    borderWidth: 2,
  },
  table: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "grey",
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    textAlign: "center",
  },
  row: {
    height: 28,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#68a0cf",
    borderRadius: 15,
  },
});

export default RiderMain;
