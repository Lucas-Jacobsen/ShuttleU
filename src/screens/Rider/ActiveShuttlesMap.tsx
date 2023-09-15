import React, { useEffect, useState } from "react";
import {StyleSheet,View, Dimensions, Text, Button, Alert, ImageBackground, Pressable} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Shuttle } from '..//../models/Shuttle'; // Import the Shuttle class
import * as Location from "expo-location"




const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = { latitude: 33.513154,longitude: -112.125235,latitudeDelta: LATITUDE_DELTA,longitudeDelta: LONGITUDE_DELTA};





const ActiveShuttlesMap = () => {

const [shuttleData, setShuttleData] = useState<Shuttle[]>([]);
const [currentLocation, setCurrentLocation] = useState(Object);


  useEffect(() => {
    // Fetch shuttle data from  API
    fetch('137.152.185.76:3000/shuttle')
      .then((response) => response.json())
      .then((data) => {
        setShuttleData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

   
    };

    getLocation();
  }, []);

  return (
      <MapView
         style={styles.map}
         //provider={PROVIDER_GOOGLE}
         initialRegion={INITIAL_POSITION}
         showsUserLocation={true}
      >
        {shuttleData.map((shuttle) => (
          <Marker
            key={shuttle.id}
            coordinate={{
              latitude: shuttle.lat,
              longitude: shuttle.long,
            }}
            title={`Shuttle ID: ${shuttle.id}`}
          />
               
        )
        )}
        <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title={`Current Location`}
          />
      </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "90%",
    height: "50%",
    borderWidth: 2,
  },
 
});

export default ActiveShuttlesMap;
