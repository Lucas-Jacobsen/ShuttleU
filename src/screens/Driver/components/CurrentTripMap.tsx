import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Trip } from '../../../models/Trip'; // Import the Trip type


const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const apikey = 'AIzaSyBInqlvsV-4LDfunvnsiDnQYa93sPsiRo0';

interface MapScreenProps {
    trip: Trip; // Define the Trip prop
  }

const CurrentTripMap: React.FC<MapScreenProps> = ({trip}) => {



const origin = { latitude: 33.515231000, longitude: -112.118912000};
const destination = { latitude: 33.510833740, longitude: -112.131370544};

  useEffect(() => {
    // Add any necessary logic here
  }, []);

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
  },
  map: {
    flex: 1,
   
    
  },
});

export default CurrentTripMap;
