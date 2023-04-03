import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Alert,
  ImageBackground,
  Pressable
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
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";




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
      <ImageBackground source={require('../assets/ShuttleU-BackgroundImage.jpg')} resizeMode="cover" style={styles.bImage}>
      <View>
        <Text style={styles.header}>Shuttle Map</Text>
      </View>
      <MapView
        style={styles.map}
        /*provider={PROVIDER_GOOGLE}*/
        initialRegion={INITIAL_POSITION}
        showsUserLocation={true}
      >
      <Marker coordinate = {{latitude: 33.513154,longitude: -112.125235}}
         pinColor = {"purple"} // any color
         title={"Shuttle 1"}
         description={" Next Stop : Bldg-3"}/>
      
         
         </MapView>
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
      <Pressable style={styles.button} onPress={() => alert("HELLO WORLD")}><Text style={styles.text}>RESERVE A RIDE</Text></Pressable>
     
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginTop: 50
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
    backgroundColor: "#F1f1f1",
  },
  head: {
    height: 40,
    backgroundColor: "#000",
    color: 'white',
    textAlign: "center",
    fontWeight: '500',
    paddingTop: 7,
    borderColor: 'white',
    borderWidth: .56,
    
    
  },
  text: {
    textAlign: "center",
    fontWeight: '500'
  },
  row: {
    height: 28,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderColor: 'grey',
    borderWidth: 2.5,
    elevation: 3,
    width: 300,
    marginTop: 20,
  },
  bImage:{
    height: height,
    width: width,
    alignItems:'center'
  
  }
});

export default RiderMain;
