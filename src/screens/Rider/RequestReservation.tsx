import React, { Component, useState } from 'react';
import {StyleSheet,View, Dimensions, Text, Button, Alert, ImageBackground, Pressable, } from "react-native";
import { Input } from 'react-native-elements';


const { width, height } = Dimensions.get("window");


const RequestReservation =() => {

    const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
    return (
        <View>
                  <ImageBackground source={require('../../assets/ShuttleU-BackgroundImage.jpg')} resizeMode="cover" style={styles.bImage}>
                  <Text style={styles.header}>Request a Ride</Text>
                    <Input placeholder='Pickup Location' />
                    <Input placeholder="Drop off Location"/>
                    <Input placeholder="When"/>
                    <Pressable style={styles.button}><Text style={styles.buttonText}>Submit</Text></Pressable>
                    <Pressable style={styles.buttonCancel}><Text style={styles.buttonText}>Cancel</Text></Pressable>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({

header: {
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center'
  },
  bImage:{
        height: height,
        width: width,
        
  },
  button:{
  alignSelf:'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    borderColor:'grey',
    borderWidth: 5,
  },
  buttonCancel:{
    alignSelf:'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    borderColor:'red',
    borderWidth: 5,
  },
  buttonText:{
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  }
});


export default RequestReservation;