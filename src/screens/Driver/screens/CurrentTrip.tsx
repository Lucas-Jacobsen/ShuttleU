import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Trip} from '../../../models/Trip';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../types';
import CurrentTripMap from '../components/CurrentTripMap';
import UpdateTrip from '../components/UpdateTrip';


const { width, height } = Dimensions.get("window");

type CurrentTripProps = NativeStackScreenProps<RootStackParamList, 'CurrentTrip'>;


const CurrentTrip:React.FC<CurrentTripProps> = ({ route , navigation}) => {
  const { trip } = route.params as unknown as { trip: Trip };
  
  const [seconds, setSeconds] = useState(0);
  const [currentTrip, setCurrentTrip] = useState(trip); // Define a state variable


  //Timer
  useEffect(() => {
    let timerInterval: NodeJS.Timeout;

    // Start the timer when the component is mounted
    timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000); // Update every second

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const handleUpdateTrip = (modifiedTrip: Trip) => {
    // Update the currentTrip state with the modified trip data
    setCurrentTrip(modifiedTrip);
console.log("Current Trip: " + currentTrip.pax);
    // Trigger a reload by toggling the reload state
  };

  useEffect(() => {
    setCurrentTrip(trip);
  }, [trip]);

  

    return (
             <ImageBackground source={require('../../../assets/ShuttleU-BackgroundImage.jpg')} resizeMode="cover" style={styles.bImage}>

             <Text style={styles.header}>Trip Details</Text>
             <Text style={styles.details}>Duration:     {seconds}s</Text>
             <Text style={styles.details} >Passengers:     {trip.pax}</Text>
             <Text style={styles.details}>Pickup:             {trip.pickup}</Text>
             <Text style={styles.details}>Dropoff:            {trip.dropoff}</Text> 
             <CurrentTripMap trip={trip}/>
             <UpdateTrip trip={trip}  onUpdateTrip={(modifiedTrip) => {handleUpdateTrip(modifiedTrip);}} />
             </ImageBackground>
               
    );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    margin: 50,
    borderColor:'red', 
    borderWidth: 3,
    textAlign: 'center'
  },
  details:{
    textAlign: 'center',
    fontSize: 30, 
    marginBottom: 10
  },
  bImage:{
    height: height,
    width: width,
},
});

export default CurrentTrip;
  
