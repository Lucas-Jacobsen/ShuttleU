import React, { Component } from 'react';
import {StyleSheet,View, Dimensions, Text, Button, Alert, ImageBackground, Pressable,TextInput } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Table, Row, Rows } from 'react-native-table-component';



const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = { latitude: 33.513154,
                           longitude: -112.125235,
                           latitudeDelta: LATITUDE_DELTA,
                           longitudeDelta: LONGITUDE_DELTA}
                           ;


const StartTrip = () => {
    let state = {
        tableHead: ["Duration", "Next Stop", "Passengers"],
        tableData: [
          ["3:44", "Bldg-87", "3"],
        
        ],
      };
    return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/ShuttleU-BackgroundImage.jpg')} resizeMode="cover" style={styles.bImage}>
        <View>
          <Text style={styles.header}>Current Trip</Text>
        </View>
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

        <View style={styles.UpdateButtons}>
            <Text style={styles.UpdateText}>Passengers</Text>
            <Pressable style={styles.IDbutton} onPress={() =>alert("Increment PAX")}><Text style={styles.text}>+</Text></Pressable>
            <Text style={styles.UpdateText}>/</Text>
            <Pressable style={styles.IDbutton} onPress={() =>alert("Decrement PAX")}><Text style={styles.text}>-</Text></Pressable>
            <Text style={styles.UpdateText}>4</Text>
        </View> 

        <View style={styles.AddStop}>
          <Text style={styles.AddStopText}>Add Stop</Text>
          <TextInput placeholder='New Stop' style={styles.AddStopInput}/>
          <Pressable style={styles.AddStopButton}><Text>Add Stop</Text></Pressable>
        </View>
        <Pressable style={styles.button}><Text style={styles.text}>Update Trip</Text></Pressable>
           </ImageBackground>
           </View>
    )
}
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
      height: "50%",
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
      display:'flex'
    },
    IDbutton:{
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 4,
        width: 60,
        height: 50,
        left: '25%',
      },
    UpdateButtons:{
      width: width, 
      flexDirection: 'row',
      height:75,
      paddingTop: 10 
     },
    UpdateText:{
      left: '25%',
      padding: 10,
      fontWeight: '500',
      fontSize: 20
    },
    AddStop:{
      width: width, 
      flexDirection: 'row',
      height:75,
      paddingTop: 10 ,
          
    },
    AddStopText:{
      left: '25%',
      padding: 10,
      fontWeight: '500',
      fontSize: 20
    },
    AddStopInput: {
      width: '33%',
      height: 40,
      marginTop: 5,
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 2.5,
      textAlign: 'center'
    },
    AddStopButton:{
      paddingHorizontal: 8,
      paddingVertical: 12.5,
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 2.5,
      width: 80,
      height: 50,
    },
    bImage:{
      height: height,
      width: width,
      alignItems:'center'
    
    }
  });
  
  
export default StartTrip;