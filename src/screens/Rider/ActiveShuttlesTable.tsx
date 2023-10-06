import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Trip } from "../../models/Trip";
import * as Location from "expo-location";
import { Shuttle } from "../../models/Shuttle";
import ShuttleTripData from "../../models/ShuttleTripData";
import { API_KEY } from "../../config";
import axios from "axios";

const ActiveShuttlesTable: React.FC = () => {
  const [shuttleTripData, setShuttleTripData] = useState<ShuttleTripData[]>([]);
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>();
  const [origin, setOrigin] = useState<string>("");

  const [loading, setLoading] = useState(true);
  const [distances, setDistances] = useState<string[]>([]); // Specify initial state as an empty array of strings
  const apiKey = API_KEY;
  const distancesArray: string[] = [];

  const sampleData: ShuttleTripData[] = [
    {
      shuttleId: 1,
      lat: 33.51083374,
      lon: -112.131370544,
      dropoff: 84,
      pax: 3,
      dur: 100,
    },
    {
      shuttleId: 4,
      lat: 33.512325,
      lon: -112.131334,
      dropoff: 4,
      pax: 1,
      dur: 100,
    },
    {
      shuttleId: 3,
      lat: 33.513193,
      lon: -112.128283,
      dropoff: 16,
      pax: 2,
      dur: 100,
    },
    {
      shuttleId: 2,
      lat: 33.512941,
      lon: -112.122134,
      dropoff: 57,
      pax: 4,
      dur: 100,
    },
    {
      shuttleId: 5,
      lat: 33.515485,
      lon: -112.130893,
      dropoff: 12,
      pax: 5,
      dur: 100,
    },
  ];
  //Load Current Location
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const originCoord = `${location.coords.latitude},${location.coords.longitude}`;
    setOrigin(originCoord);

    // Set currentLocation with latitude and longitude
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  //Load Data
  const loadShuttleTripData = async () => {
    /*const response = await fetch("137.152.185.100:3000/trip", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json`'
    }
  });

  let data = await response.json(); */
    console.log(
      "Filtered Data:",
      sampleData.filter((data) => data.dur > 0)
    );

    setShuttleTripData(sampleData);
  };

  //useEffect hook to perform side effects in a functional component
  useEffect(() => {
    loadShuttleTripData();
    getLocation();

    // Create an array to store distances
    const distancesArray: string[] = [];

    // Make API requests for each destination
    Promise.all(
      sampleData.map((destination) => {
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination.lat},${destination.lon}&key=${apiKey}`;
        return axios.get(url);
      })
    )
      .then((responses) => {
        responses.forEach((response) => {
          setLoading(false); // Set isLoading to false when Promise responses are received
          const distanceText = response.data.rows[0].elements[0].distance.text;
          distancesArray.push(distanceText);
        });
        setDistances(distancesArray);
      })
      .catch((error) => {
        console.error("Error fetching distances: ", error);
      });
  }, []);
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Active Shuttles</Text>
      <FlatList
        style={styles.table}
        data={[
          {
            shuttleId: "Shuttle ID",
            lat: 0,
            long: 0,
            dropoff: "Drop-off Location",
            pax: "Passengers",
            dur: "Duration",
          },
          ...shuttleTripData.filter((data) => data.dur > 0),
        ]}
        keyExtractor={(data) => data.shuttleId.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            {index === 0 ? (
              <>
                <Text style={styles.cellHead}>Shuttle Number</Text>
                <Text style={styles.cellHead}>Distance</Text>
                <Text style={styles.cellHead}>Next Stop</Text>
                <Text style={styles.cellHead}>Riders</Text>
              </>
            ) : (
              <>
                <Text style={styles.cell}>{item.shuttleId}</Text>
                <Text style={styles.cell}>{distances[index - 1]}</Text>
                <Text style={styles.cell}>Bldg-{item.dropoff}</Text>
                <Text style={styles.cell}>{item.pax}</Text>
              </>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    borderWidth: 2,
    marginTop: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  table: {
    width: 300,
    marginBottom: 10,
  },
  cellHead: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    textAlignVertical: "center",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    textAlignVertical: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActiveShuttlesTable;
