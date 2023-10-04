import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Trip } from '../../../models/Trip';

type UpdateTripProps = {
  trip: Trip;
  onUpdateTrip: (modifiedTrip: Trip) => void;
};

const UpdateTrip: React.FC<UpdateTripProps> = ({ trip, onUpdateTrip }) => {
  const [modifiedTrip, setModifiedTrip] = useState({ ...trip });
  const [passengerCount, setPassengerCount] = useState(trip.pax.toString()); // State for passenger count

  const handleIncrementPassengers = () => {
    // Increment the passenger count
    const newPassengerCount = parseInt(passengerCount) + 1;
    setPassengerCount(newPassengerCount.toString());
    setModifiedTrip({ ...modifiedTrip, pax: newPassengerCount });
  };

  const handleDecrementPassengers = () => {
    // Decrement the passenger count, but ensure it doesn't go below 0
    const newPassengerCount = Math.max(0, parseInt(passengerCount) - 1);
    setPassengerCount(newPassengerCount.toString());
    setModifiedTrip({ ...modifiedTrip, pax: newPassengerCount });
  };

  const handleConfirm = () => {
    // Update the trip with the modified data
    onUpdateTrip(modifiedTrip);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Trip</Text>
      <TextInput
        style={styles.input}
        placeholder="New Destination"
        onChangeText={(text) => setModifiedTrip({ ...modifiedTrip, dropoff: text })}
      />
      <View style={styles.passengerContainer}>
        <Text style={styles.passengerLabel}>Passengers: </Text>
        <Button title="-" onPress={handleDecrementPassengers} />
        <TextInput
          style={styles.passengerInput}
          value={passengerCount}
          onChangeText={(text) => setPassengerCount(text)}
          keyboardType="numeric"
        />
        <Button title="+" onPress={handleIncrementPassengers} />
      </View>
      <Button title="Confirm" onPress={handleConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  passengerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  passengerLabel: {
    fontSize: 16,
  },
  passengerInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
});

export default UpdateTrip;
