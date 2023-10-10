import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import ModalSelector from "react-native-modal-selector";
import { loadedBldgData } from "../../../dataLoader";
import { Trip } from "../../../models/Trip";

type UpdateTripProps = {
  trip: Trip;
  newTrip: (modifiedTrip: Trip) => void;
};

const UpdateTrip: React.FC<UpdateTripProps> = ({ trip, newTrip }) => {
  const [modifiedTrip, setModifiedTrip] = useState({ ...trip });
  const [passengerCount, setPassengerCount] = useState(trip.pax.toString());
  const [selectedBuildingLabel, setSelectedBuildingLabel] = useState(""); // State for displaying selected building


  const handleIncrementPassengers = () => {
    const newPassengerCount = parseInt(passengerCount) + 1;
    setPassengerCount(newPassengerCount.toString());
    setModifiedTrip({ ...modifiedTrip, pax: newPassengerCount });
  };

  const handleDecrementPassengers = () => {
    const newPassengerCount = Math.max(0, parseInt(passengerCount) - 1);
    setPassengerCount(newPassengerCount.toString());
    setModifiedTrip({ ...modifiedTrip, pax: newPassengerCount });
  };

  const handleBuildingChange = (option: { key: any; label: React.SetStateAction<string>; }) => {
    setModifiedTrip({ ...modifiedTrip, dropoff: option.key });
    setSelectedBuildingLabel(option.label); // Update the selected building label
  };

  const handleConfirm = () => {


    newTrip(modifiedTrip);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buildingContainer}>
        <ModalSelector
          data={loadedBldgData.map((building) => ({
            key: building.number,
            label: building.name,
          }))}
          initValue="Click to Select New Drop-off Building"
          accessible={true}
          scrollViewAccessibilityLabel={"Scrollable options"}
          initValueTextStyle={{ color: "black", fontWeight: '500'}}
          onChange={handleBuildingChange}
          style={styles.modalSelector}
          selectStyle={{ borderWidth: 0 }}
        />
        <Text style={styles.selectedBuildingLabel}>{selectedBuildingLabel}</Text>
      </View>
      <View style={styles.passengerContainer}>
        <Text style={styles.passengerLabel}>Passengers: </Text>
        <TouchableOpacity
          onPress={handleDecrementPassengers}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.passengerInput}
          value={passengerCount}
          onChangeText={(text) => setPassengerCount(text)}
          keyboardType="numeric"
          returnKeyType="done"
        />
        <TouchableOpacity
          onPress={handleIncrementPassengers}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleConfirm}
        style={styles.confirmButton}
      >
        <Text style={styles.confirmButtonText}>Update Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    marginBottom: 20
  },
  header: {
    fontSize: 20,
    textAlign: "center",
  },
  buildingContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectedBuildingLabel: {
    fontSize: 20,
    color: "black",
    textDecorationLine: 'underline',
    
  },
  passengerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    alignSelf: 'center'
  },
  passengerLabel: {
    fontSize: 16,
  },
  passengerInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    width: 100,
    textAlign: "center",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center'
    

  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  confirmButton: {
    backgroundColor: "green",
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    height: 30
  },
  confirmButtonText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center'
  },
  modalSelector: {
    width: 200,
    marginRight: 10,
  },
});

export default UpdateTrip;
