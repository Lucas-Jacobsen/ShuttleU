import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Alert,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
import { Row, Rows, Table } from "react-native-table-component";
import { loadedShuttleData, loadedTripData } from "../../../datasource/dataLoader";

const { width, height } = Dimensions.get("window");

const ViewShuttleLogs = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
    <Text style={styles.heading}> Shuttles</Text>
    <View style={styles.row}>
    <Text style={styles.headerCell}>id</Text>
   <Text style={styles.headerCell}>Code</Text>
  <Text style={styles.headerCell}>Type</Text>
  <Text style={styles.headerCell}>Status</Text>
</View>
    <FlatList
      data={loadedShuttleData}
      keyExtractor={(trip) => trip.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}> {item.id}</Text>
          <Text style={styles.cell}> {item.code}</Text>
          <Text style={styles.cell}> {item.type}</Text>
          <Text style={styles.cell}> {item.status}</Text>
        

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
  fontSize: 22,
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

export default ViewShuttleLogs;
