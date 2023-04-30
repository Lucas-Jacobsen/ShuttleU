import React from "react";
import {StyleSheet,View, Dimensions, Text, Button, Alert, ImageBackground, Pressable} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell,} from "react-native-table-component";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";
import { NavigationContainer } from "@react-navigation/native";
import RequestReservation from "./RequestReservation";
import { Header } from "react-native/Libraries/NewAppScreen";




const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = { latitude: 33.513154,
                           longitude: -112.125235,
                           latitudeDelta: LATITUDE_DELTA,
                           longitudeDelta: LONGITUDE_DELTA}
                           ;
const Stack = createNativeStackNavigator<RootStackParamList>();


export default function RiderMainPage(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="RiderMain" component={RiderMain} />
        <Stack.Screen name="RequestReservation" component={RequestReservation}options={{title: 'Request a Ride'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

type RiderMainProps = NativeStackScreenProps<RootStackParamList, "RiderMain">;


const RiderMain: React.FC<RiderMainProps> = (props) => {
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
      <Marker coordinate = {{latitude: 33.513154,longitude: -112.125835}}
         pinColor = {"purple"} // any color
         title={"Shuttle 1"}
         description={" Next Stop : Bldg-3"}/>
      
      <Marker coordinate={{latitude: 33.51316,longitude: -112.125244}}
       pinColor = {"purple"} // any color
       title={"Shuttle 2"}
       description={" Next Stop : Bldg-6"}/>
         
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
      <Pressable style={styles.button} onPress={() => props.navigation.push("RequestReservation")}><Text style={styles.text}>RESERVE A RIDE</Text></Pressable>
     
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

