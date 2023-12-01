import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text, ImageBackground, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Input } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";
import { loadedBldgData, loadedTripData } from '../../datasource/dataLoader';
import { Trip } from '../../models/Trip';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

export type StackParamList = {
  ArrivalStatus: { newTripId: number };
};

type Props = {
  navigation: StackNavigationProp<StackParamList>;
};
const RequestReservation: React.FC<Props> = ( {navigation}) => {
  const [selectedPickupBuilding, setSelectedPickupBuilding] = useState(0);
  const [selectedDropoffBuilding, setSelectedDropoffBuilding] = useState(0);
  const [selectedPassengers, setSelectedPassengers] = useState(1);

  useEffect(() => {
    // Simulate fetching the list of buildings
    setBuildings(loadedBldgData);
  }, []);

  const [buildings, setBuildings] = useState(loadedBldgData);

  const handleSubmit = () => {
    if (!selectedPickupBuilding || !selectedDropoffBuilding) {
      alert('Please select both pickup and drop-off locations.');
      return;
    }

    const newTripId = loadedTripData.length + 1;
    const newTrip = new Trip(newTripId, 0, selectedPickupBuilding, selectedDropoffBuilding, selectedPassengers, 0);

    loadedTripData.push(newTrip);
    console.log('Form submitted');
    console.log('Pickup Location:', selectedPickupBuilding);
    console.log('Drop-off Location:', selectedDropoffBuilding);
    console.log('Selected Passengers:', selectedPassengers);

    navigation.navigate('ArrivalStatus', { newTripId });
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handlePassengerInputChange = (text: string) => {
    if (text === '') {
      setSelectedPassengers(0);
    } else {
      setSelectedPassengers(parseInt(text, 10));
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/ShuttleU-BackgroundImage.jpg')}
        resizeMode="cover"
        style={styles.bImage}
      >
        <Text style={styles.header}>Request a Ride</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pickup Location</Text>
          <Picker
            selectedValue={selectedPickupBuilding}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedPickupBuilding(itemValue)
            }
          >
            <Picker.Item label="Select Pickup Building" value="" />
            {buildings.map((building) => (
              <Picker.Item
                key={building.number}
                label={building.name}
                value={building.number}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Drop-off Location</Text>
          <Picker
            selectedValue={selectedDropoffBuilding}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedDropoffBuilding(itemValue)
            }
          >
            <Picker.Item label="Select Drop-off Building" value="" />
            {buildings.map((building) => (
              <Picker.Item
                key={building.number}
                label={building.name}
                value={building.number}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Number of Passengers</Text>
          <Input
            placeholder="Enter Number of Passengers"
            keyboardType="numeric"
            value={selectedPassengers.toString()}
            onChangeText={handlePassengerInputChange}
            returnKeyType="done"
          />
        </View>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        <Pressable style={styles.buttonCancel} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center',
  },
  bImage: {
    height: height,
    width: width,
  },
  button: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 5,
  },
  buttonCancel: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    borderColor: 'red',
    borderWidth: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RequestReservation;
