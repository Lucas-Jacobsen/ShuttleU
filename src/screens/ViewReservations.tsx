import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { Table, TableWrapper, Row,Rows, Cell } from 'react-native-table-component';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";


const ViewReservations = () => {

  let state = {
      tableHead: ['Head', 'Head2', 'Head3', ''],
      tableData: [
        ['1', '2', '3', 'Start'],
        ['a', 'b', 'c', 'Start'],
        ['1', '2', '3', 'Start'],
        ['a', 'b', 'c', 'Start']
      ]
    }

 

    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>ViewReservations</Text>
            </View>
            <View style={styles.table}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#000" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
        </View>
        
      );
    };
  
const styles = StyleSheet.create({
    header: {
      fontSize: 30,
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    map: {
      width: "90%",
      height: "60%",
      borderWidth: 2,
    },
    table: {
      marginTop: 20,
      width: "90%",
      backgroundColor: "grey",
    },
    head: {
      height: 40,
      backgroundColor: "#f1f8ff",
    },
    text: {
      textAlign: "center",
    },
    row: {
      height: 28,
    },
    


  });
  


export default ViewReservations;
