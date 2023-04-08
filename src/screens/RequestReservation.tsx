import React, { Component } from 'react';
import {StyleSheet,View, Dimensions, Text, Button, Alert, ImageBackground, Pressable, } from "react-native";
import { Input } from 'react-native-elements';
import { Table, TableWrapper, Row,Rows, Cell } from 'react-native-table-component';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("window");


const RequestReservation =() => {
    return (
        <View style={styles.container}>
                  <ImageBackground source={require('../assets/ShuttleU-BackgroundImage.jpg')} resizeMode="cover" style={styles.bImage}>
                  <Text style={styles.header}>Request a Ride</Text>
                    <Input placeholder='Pickup Location' />
                    <Input placeholder="Drop off Location"/>
                    <Pressable><Text>Submit</Text></Pressable>
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
    textAlign: 'center'
  },
  bImage:{
        height: height,
        width: width,
  }
});


export default RequestReservation;