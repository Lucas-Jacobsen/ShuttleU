import React, { useEffect, useState } from "react";
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
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Shuttle } from "..//../models/Shuttle"; // Import the Shuttle class
import * as Location from "expo-location";
import ShuttleTripData from "../../models/ShuttleTripData";

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

const ActiveShuttlesMap = () => {
  const [shuttleData, setShuttleData] = useState<Shuttle[]>([]);
  const [currentLocation, setCurrentLocation] = useState(Object);

  const sampleList: Shuttle[] = [
    new Shuttle(1, 'Type A', 'SH01', 1, 33.510833740, -112.131370544),
    new Shuttle(2, 'Type B', 'SH02', 0, 33.512941000, -112.122134000),
    new Shuttle(3, 'Type C', 'SH03', 1, 33.513193000, -112.128283000),
    new Shuttle(4, 'Type A', 'SH04', 1, 33.512325000, -112.131334000), 
    new Shuttle(5, 'Type B', 'SH05', 1, 33.515485000, -112.130893000),      
  ];
  const sampleData: ShuttleTripData[] = [
    {shuttleId: 1, lat: 33.510833740, lon: -112.131370544, dropoff: 84, pax: 3, dur: 100 },
    {shuttleId: 4, lat: 33.512325000, lon: -112.131334000, dropoff: 4, pax: 1, dur: 100 },
    {shuttleId: 3, lat: 33.513193000, lon: -112.128283000, dropoff: 16, pax: 2, dur: 100 },
    {shuttleId: 2, lat: 33.512941000, lon: -112.122134000, dropoff: 57, pax: 4, dur: 100 },
    {shuttleId: 5,lat: 33.515485000, lon: -112.130893000, dropoff: 12, pax: 5, dur: 100 },
  ];
  //Load Current Location
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);
  };

  //Load Shuttles
  const loadShuttles = async () => {
   /* const response = await fetch("137.152.185.100:3000/shuttle", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json`'
      }
    });

    let data = await response.json();
    console.log(data); */
    setShuttleData(sampleList);
  };


  useEffect(() => {
    getLocation();
    loadShuttles();
    
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
            longitude: shuttle.lon,
          }}
          title={`Shuttle ${shuttle.id}`}
        />
      ))}
   
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
