import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ImageBackground,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

// Sample building data
const sampleBuildings = [
  { name: 'Jerome Apartments', number: 54, lat: 42.123456, long: -71.987654 },
  { name: 'Natural Sciences', number: 6, lat: 42.234567, long: -71.876543 },
  { name: 'Baseball Stadium', number: 15, lat: 42.345678, long: -71.765432 },
  { name: 'Humanities and Social Sciences', number: 16, lat: 42.456789, long: -71.654321 },
  { name: 'Rivers Parking Garage', number: 75, lat: 42.567890, long: -71.543210 },
];

const RequestReservation: React.FC = () => {
  const [selectedPickupBuilding, setSelectedPickupBuilding] = useState('');
  const [selectedDropoffBuilding, setSelectedDropoffBuilding] = useState('');
  const [selectedPassengers, setSelectedPassengers] = useState(1); // Example initial value
  const navigation = useNavigation();


  useEffect(() => {
    // Simulate fetching the list of buildings
    // You can replace this with actual API fetching later
    setBuildings(sampleBuildings);
  }, []);

  const [buildings, setBuildings] = useState(sampleBuildings);
  const [isPassengerInputVisible, setIsPassengerInputVisible] = useState(true);

  const handleSubmit = () => {
       // Check if both pickup and drop-off locations have been selected
       if (!selectedPickupBuilding || !selectedDropoffBuilding) {
        // Show an error message or alert to indicate missing selections
        alert('Please select both pickup and drop-off locations.');
        return; // Do not proceed with submission
      }
    // Handle form submission here
    console.log('Form submitted');
    console.log('Pickup Location:', selectedPickupBuilding);
    console.log('Drop-off Location:', selectedDropoffBuilding);
    console.log('Selected Passengers:', selectedPassengers);
    navigation.goBack();
  };
  const handleCancel = () => {
    navigation.goBack();
  }

  const handlePassengerInputChange = (text: string) => {
    // Check if the input is empty before attempting to parse it
    if (text === '') {
      setSelectedPassengers(0); // Set to 0 or any other default value as needed
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
                value={building.number.toString()}
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
                value={building.number.toString()}
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
            returnKeyType="done" // Set returnKeyType to "done" for the "Done" button
          />
        </View>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        <Pressable style={styles.buttonCancel} onPress={handleCancel}>
          <Text style={styles.buttonText} >Cancel</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
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
  confirmButton: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 2,
  },
  confirmedText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RequestReservation;
