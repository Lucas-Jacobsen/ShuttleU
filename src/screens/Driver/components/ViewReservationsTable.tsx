import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Trip } from '../../../models/Trip';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { loadedTripData, loadedBldgData } from '../../../dataLoader';
import { Bldg } from '../../../models/bldg';

const { width, height } = Dimensions.get("window");


export type StackParamList = {
  CurrentTrip: { trip: Trip };
};

type Props = {
  navigation: StackNavigationProp<StackParamList>;
};

const ViewReservationsTable: React.FC<Props> = ({ navigation }) => {
  const [tripData, setTripData] = useState<Trip[]>([]);
  const [pickupBldgName, setPickupBldgName] = useState('');
  const [dropoffBldgName, setDropoffBldgName] = useState('');

  const handleGoPress = (trip: Trip) => {
    navigation.navigate('CurrentTrip', { trip });
  };

  const loadTrips = async () => {
    setTripData(loadedTripData.filter((sampleTrip) => sampleTrip.dur < 1));
  };

  function findBuildingByNumber(number: number): string {
    const foundBuilding = loadedBldgData.find((building) => building.number === number);
    return foundBuilding ? foundBuilding.name : 'Building Not Found';
  }

  useEffect(() => {
    loadTrips();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Trips</Text>
 
    
          <View style={styles.headerCell}>
            <Text style={styles.cell}>PICKUP</Text>
            <Text style={styles.cell}>DROPOFF</Text>
            <Text style={styles.cell}>Passengers</Text>            
          </View>
      <FlatList
        data={tripData}
        keyExtractor={(trip) => trip.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{findBuildingByNumber(item.pickup)}</Text>
            <Text style={styles.cell}>{findBuildingByNumber(item.dropoff)}</Text>
            <Text style={styles.paxcell}>{item.pax}</Text>
            <Pressable style={styles.start} onPress={() => handleGoPress(item)}>
              <Text style={styles.startText}>GO</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width, // Set the container width to 100%
    height: "80%",
    paddingHorizontal: 16,
    paddingTop: 20,
    borderWidth: 2,
    alignSelf: 'center', // Center the container horizontally
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  headerCell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    padding: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 15,
    textAlign: 'center',

  },
  paxcell:{
    padding: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 22,
    width: 25,
    textAlign: 'center'
  },
  start: {
    width: 60,
    height: 50,
    borderWidth: 2,
  },
  startText:{
    fontSize: 40
  }
});

export default ViewReservationsTable;
