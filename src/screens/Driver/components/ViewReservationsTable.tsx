import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Trip } from '../../../models/Trip';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export type StackParamList = {
  CurrentTrip: { trip: Trip };
};

type Props = {
  navigation: StackNavigationProp<StackParamList>;
};
const ViewReservationsTable : React.FC<Props>  = ({ navigation })=> {
    const [tripData, setTripData] = useState<Trip[]>([]);          // Initialize it as an empty array of type 'Trip'
    const [loading, setLoading] = useState(true);                  //Initialize loading as true
    
    //----------------------------SAMPLE DATA------------------------------------
 const sampleTrips: Trip[] = [
      {
        id: 1,
        shuttle: 'Shuttle A',
        pickup: ' 1',
        dropoff: ' 2',
        pax: 3,
        dur: 0,
      },
      {
        id: 2,
        shuttle: 'Shuttle B',
        pickup: ' 3',
        dropoff: ' 4',
        pax: 2,
        dur: 0,
      },
      {
        id: 3,
        shuttle: 'Shuttle C',
        pickup: ' 5',
        dropoff: ' 6',
        pax: 4,
        dur: 0,
      },
      // Add more sample trips as needed
    ];
    //---------------------------------------------------------------------------
   
    const handleGoPress = (trip: Trip) => {
      navigation.navigate('CurrentTrip', { trip });
      console.log(trip);
    };
    //Load Trips
    const loadTrips = async() =>{
      // const response = await fetch('http://localhost:3000/trip')
      // let data = await response.json();
      // setTripData(data);

      setTripData(sampleTrips);
    }
    //useEffect hook to perform side effects in a functional component
    useEffect(() => {
      setLoading(true);
      loadTrips();
    }, []);
  
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Available Trips</Text>
          <View style={styles.row}>
        <Text style={styles.headerCell}>Pickup</Text>
        <Text style={styles.headerCell}>Dropoff</Text>
        <Text style={styles.headerCell}>Passengers</Text>
        <Text style={styles.headerCell}>Start</Text>
  </View>
          <FlatList
            data={tripData}
            keyExtractor={(trip) => trip.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}> {item.pickup}</Text>
                <Text style={styles.cell}> {item.dropoff}</Text>
                <Text style={styles.cell}> {item.pax}</Text>
                <Pressable style={styles.start} onPress={() => handleGoPress(item)}><Text>GO</Text></Pressable>
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
        borderWidth: 2
        
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      headerCell: {
        fontSize:12
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
        fontSize: 8,
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      start:
      {
        width: 40,
        height: 50,
        borderWidth: 2
        
      }
    });
    
    
export default ViewReservationsTable;