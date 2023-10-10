import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Trip } from "../../../models/Trip";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types";
import CurrentTripMap from "../components/CurrentTripMap";
import UpdateTrip from "../components/UpdateTrip";
import { loadedBldgData, loadedTripData } from "../../../dataLoader";
import { Bldg } from "../../../models/bldg";

const { width, height } = Dimensions.get("window");

type CurrentTripProps = NativeStackScreenProps<
  RootStackParamList,
  "CurrentTrip"
>;

const CurrentTrip: React.FC<CurrentTripProps> = ({ route, navigation }) => {
  const { trip } = route.params as unknown as { trip: Trip };

  const [seconds, setSeconds] = useState(0);
  const [currentTrip, setCurrentTrip] = useState(trip); // Define a state variable
  const [completed, setCompleted] = useState(false);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const CurrentTrip = trip;
  const [pickupBldgName, setPickupBldgName] = useState('');
  const [dropoffBldgName, setDropoffBldgName] = useState('');


  function findBuildingByNumber(buildings: Bldg[], number: Number): Bldg | undefined {
    return buildings.find((building) => building.number === number);
  }


  useEffect(() => {
    const foundPickup = findBuildingByNumber(loadedBldgData, trip.pickup);
    const foundDropoff = findBuildingByNumber(loadedBldgData, trip.dropoff);

    if (foundPickup && foundDropoff) {
     setPickupBldgName(foundPickup.name);
     setDropoffBldgName(foundDropoff.name);
    

    } else {
      console.log("Building not found");
   
    }
  }, );
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
  }, [completed]);

  const handleUpdateTrip = (modifiedTrip: Trip) => {
    // Update the currentTrip state with the modified trip data
    setCurrentTrip(modifiedTrip);
  };
  const handleCompleteTrip = () => {
    console.log("Timer Stopped: " + seconds);

    // Update the trip duration
    const updatedTrip = { ...currentTrip, dur: seconds };
    setCurrentTrip(updatedTrip);

    const idToReplace = trip.id;
    const indexTripToReplace = loadedTripData.findIndex(
      (trip) => trip.id === idToReplace
    );
    if (indexTripToReplace !== -1) {
      loadedTripData[indexTripToReplace] = updatedTrip;
    } else {
      loadedTripData.push(updatedTrip);
    }

    setCompleted(true);
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/ShuttleU-BackgroundImage.jpg")}
        resizeMode="cover"
        style={styles.bImage}
      >
       <Text style={styles.header}>Trip Details</Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Duration</Text>
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Pickup</Text>
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Dropoff</Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.dataTextContainer}>
            <Text style={styles.dataText}>{seconds}s</Text>
          </View>
          <View style={styles.dataTextContainer}>
            <Text style={styles.dataText}>{pickupBldgName}</Text>
          </View>
          <View style={styles.dataTextContainer}>
            <Text style={styles.dataText}>{dropoffBldgName}</Text>
          </View>
        </View>
      </View>
        <CurrentTripMap trip={trip} />
        <Pressable style={styles.button} onPress={handleCompleteTrip}>
          <Text style={styles.confirmButtonText}>Complete Trip</Text>
        </Pressable>
        <UpdateTrip trip={trip} newTrip={handleUpdateTrip} />
        <Pressable style={styles.cancelButton} onPress={handleCompleteTrip}>
          <Text style={styles.confirmButtonText}>Cancel Trip</Text>
        </Pressable>

      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#000",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  data: {
    fontSize: 15,
  },
  detailsContainer: {
    marginTop: 10, // Adjust as needed
    alignContent: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: "#000",
    alignSelf: 'center',
  },
  details: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "green", // Confirm button color
    borderRadius: 5, // Confirm button border radius
    paddingHorizontal: 15, // Adjust horizontal padding as needed
    width: "90%",
    height: 50,
    alignSelf: "center",
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
  cancelButton: {
    backgroundColor: "red", // Confirm button color
    borderRadius: 5, // Confirm button border radius
    paddingHorizontal: 15, // Adjust horizontal padding as needed
    width: "90%",
    height: 50,
    alignSelf: "center",
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    marginBottom: 40
    
  },
  confirmButtonText: {
    color: "white", // Confirm button text color
    fontSize: 20, // Confirm button text size
    textAlign: "center",
    textAlignVertical: "center",
  },
  bImage: {
    height: height,
    width: width,
  },
  // Add these styles for the table
  tableContainer: {
    marginTop: 10, // Adjust as needed
    width: '90%',
    borderWidth: 1,
    borderColor: "#000",
    alignSelf: 'center',
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0", // Header background color
    borderWidth: 1,
    borderColor: "#000",
  },
  headerTextContainer: {
    flex: 1, // Take equal space
    alignItems: "center", // Center horizontally
    padding: 10, // Add padding to space out the content
    borderRightWidth: 1, // Add border to separate columns
    borderColor: "#000",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#000",
  },
  dataTextContainer: {
    flex: 1, // Take equal space
    alignItems: "center", // Center horizontally
    borderRightWidth: 1, // Add border to separate columns
    borderColor: "#000",
  
  },
  dataText: {
    fontSize: 15,
    textAlign:'center'
  },
});

export default CurrentTrip;
