import React, { useEffect, useState } from "react";
import {StyleSheet,View, Dimensions, Text, Button, Alert, ImageBackground, Pressable} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell,} from "react-native-table-component";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";
import { NavigationContainer } from "@react-navigation/native";
import RequestReservation from "./RequestReservation";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Shuttle } from '..//../models/Shuttle'; // Import the Shuttle class
import ActiveShuttlesTable from "../Rider/ActiveShuttlesTable";
import ActiveShuttlesMap from "./ActiveShuttlesMap";




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

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/ShuttleU-BackgroundImage.jpg')} resizeMode="cover" style={styles.bImage}>
      <View>
        <Text style={styles.header}>Shuttle Map</Text>
      </View>
      <ActiveShuttlesMap/>
      <ActiveShuttlesTable/>          
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
  text: {
    textAlign: "center",
    fontWeight: '500'
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
    
  },
  bImage:{
    height: height,
    width: width,
    alignItems:'center'
  
  }
});

