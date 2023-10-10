import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Trip } from '../../../models/Trip'; // Import the Trip type
import {  loadedBldgData } from '../../../dataLoader';
import { API_KEY } from '../../../config';
import ShuttleTripData from '../../../models/ShuttleTripData';
import { Shuttle } from '../../../models/Shuttle';
import { Bldg } from '../../../models/bldg';
import { Picker } from '@react-native-picker/picker';
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const apikey = API_KEY;




interface MapScreenProps {
    trip: Trip; // Define the Trip prop
  }
const bldgData = loadedBldgData;
const CurrentTripMap: React.FC<MapScreenProps> = ({trip}) => {
  const CurrentTrip = trip;
  const [originLat, setOriginLat] = useState<number>(0);
  const [originLon, setOriginLon] = useState<number>(0);
  const [destinationLat, setDestinationLat] = useState<number>(0);
  const [destinationLon, setDestinationLon] = useState<number>(0);

  function findBuildingByNumber(buildings: Bldg[], number: Number): Bldg | undefined {
    return buildings.find((building) => building.number === number);
  }

const origin = { latitude: originLat, longitude: originLon};
const destination = { latitude: destinationLat, longitude: destinationLon };

  useEffect(() => {
    const foundPickup = findBuildingByNumber(loadedBldgData, trip.pickup);
    const foundDropoff = findBuildingByNumber(loadedBldgData, trip.dropoff);

    if (foundPickup && foundDropoff) {
      setOriginLat(foundPickup.lat);setOriginLon(foundPickup.long);
      setDestinationLat(foundDropoff.lat);setDestinationLon(foundDropoff.long);

    } else {
      console.log("Building not found");
   
    }
  }, );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: 33.513154,
            longitude: -112.125235,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        <Marker coordinate={origin} title="Origin" />
        <Marker coordinate={destination} title="Destination" />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={apikey}
          strokeWidth={3}
          strokeColor="blue"
          mode='WALKING'
        />

      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    borderWidth: 2, // Add a border
    borderColor: 'black',
    width: '90%',
    height: '100%',
    
    
  },
});

export default CurrentTripMap;
