import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ImageBackground, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";
import { loadedTripData } from "../../datasource/dataLoader";
import { useNavigation } from "@react-navigation/native";
import CurrentTripMap from "../Driver/components/CurrentTripMap";
import ActiveShuttlesMap from "./ActiveShuttlesMap";
import { Trip } from "../../models/Trip";
import ActiveShuttlesTable from "./ActiveShuttlesTable";

const { width, height } = Dimensions.get("window");

type ArrivalStatusProps = NativeStackScreenProps<RootStackParamList, "ArrivalStatus">;

const ArrivalStatus: React.FC<ArrivalStatusProps> = ({ route }) => {
    const { newTripId } = route.params as unknown as { newTripId: Number };
    const [tripStatus, setTripStatus] = useState<boolean | null>(false);
    const [pickedUp, setPickedUp] = useState<boolean | null>(false);

    const [trip, setTrip] = useState<Trip | null>(null); // State to store the trip

    const navigate = useNavigation();

    function cancelRequest()
    {   
        // Find the index of the trip to remove based on trip.id matching newTripId
        const tripIndex = loadedTripData.findIndex(trip => trip.id === newTripId);
    
        // If the trip is found, remove it from the array using pop
        if (tripIndex !== -1) {
            loadedTripData.splice(tripIndex, 1);
        }
        navigate.goBack();
    }
    
    function riderPickedUP()
    {
        setPickedUp(true);
    }
    const fetchTripStatus = () => {
        // Replace this with your actual logic to get the trip status from loadedTripData
        const trip = loadedTripData.find(trip => trip.id === newTripId);

        if (trip) {
            setTrip(trip); // Set trip to the loaded trip
            setTripStatus(trip.dur > 0); // Set tripStatus to true if dur > 0, false otherwise
        }
    };

    useEffect(() => {
        const pollingInterval = setInterval(fetchTripStatus, 5000); // Poll every 5 seconds

        // Initial fetch
        fetchTripStatus();

        return () => {
            // Clean up the interval when the component unmounts
            clearInterval(pollingInterval);
        };
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/ShuttleU-BackgroundImage.jpg")}
                resizeMode="cover"
                style={styles.bImage}
            >
                {tripStatus === true  && trip ? (
                    <View style={{height: '90%'}}>
                    <Text style={styles.header} >Current Trip</Text>
                    <CurrentTripMap trip={trip} />


                    {pickedUp == false ? (
                        <View>
                            <Text style={styles.header}>A driver is on the way, please confirm when you get picked up</Text>
                            <Pressable onPress={riderPickedUP}><Text style={styles.pupButton} >Picked Up</Text></Pressable>

                        </View>
                    ): (
                        <View>
                        <Text style={styles.header}>Confirmed Rider Pickup</Text>
                        <Text style={styles.header}>Enjoy your ride</Text>
                        <Pressable onPress={navigate.goBack}><Text style={styles.buttonCancel}>Exit</Text ></Pressable>


                        </View>
                    )   
                    }

                    </View>
                ) : tripStatus === false ? (
                    <View style={{height: height}}>
                    <Text style={styles.header}> Waiting for Driver to accept Request</Text>
                
                    <ActivityIndicator size="large" color="#0000ff"  style={{margin: 5}}/>
                    <ActiveShuttlesMap/>
                    <ActiveShuttlesTable/>
                   
                    <Pressable onPress={cancelRequest}><Text style={styles.buttonCancel} >Cancel Reservation</Text></Pressable>
                    </View>
                ): (
                    <Text style={styles.header}>Error Getting Data</Text>
                )
                }
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        height: height,
        width: width
        
    },
    bImage: {
        height: height,
        width: width,
    }, 
    header: {
        fontSize: 25,
        marginTop: 50,
        textAlign: 'center',
      }, 
      buttonCancel: {
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        borderColor: "red",
        borderWidth: 5,
        marginBottom: 2,
        width: "90%",
        textAlign: 'center', 
        fontSize: 35,
        marginTop: 19
        
      }, 
      pupButton: {
        backgroundColor: "green", // Confirm button color
        borderRadius: 5, // Confirm button border radius
        paddingHorizontal: 15, // Adjust horizontal padding as needed
        width: "90%",
        height: 50,
        alignSelf: "center",
        alignItems: "center", // Center content horizontally
        justifyContent: "center", // Center content vertically
        borderColor: 'black',
        borderWidth: 2,
        textAlign: 'center', 
        fontSize: 35,
        marginTop: 10
      },
});

export default ArrivalStatus;





