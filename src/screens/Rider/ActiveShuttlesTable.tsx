import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Shuttle } from '../../models/Shuttle'; // Import the Shuttle model

const ActiveShuttlesTable =  () => {
  const [shuttleData, setShuttleData] = useState<Shuttle[]>([]); // Provide type for shuttleData
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('137.152.185.76:3000/shuttle')
      .then(response => response.json())
      .then(json => setShuttleData(json))
      .finally(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
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
      <ScrollView>
      <FlatList
        data={shuttleData}
        keyExtractor={(shuttle) => shuttle.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>Type: {item.type}</Text>
            <Text style={styles.cell}>Status: {item.status}</Text>
            <Text style={styles.cell}>Latitude: {item.lat}</Text>
            <Text style={styles.cell}>Longitude: {item.long}</Text>
          </View>
        )}
      />
      </ScrollView>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActiveShuttlesTable;
