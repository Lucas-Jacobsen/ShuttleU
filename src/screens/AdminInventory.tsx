import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Button, ScrollView } from 'react-native';
import { Table, TableWrapper, Row,Rows, Cell } from 'react-native-table-component';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";


const AdminInventory = () => {



  let state = {
      tableHead: ['ID', 'Type', 'Code', 'Active'],
      tableData: [
        ['1', 'Bus', '3', 'Yes'],
        ['2', 'Bus', 'c', 'Yes'],
        ['3', 'GolfCart XL', '3', 'No'],
        ['4', 'GolfCart', '3', 'Yes'],
        ['5', 'GolfCart', '3', 'No'],
        ['6', 'GolfCart', '3', 'No'],
        ['7', 'Shuttle', '3', 'Yes'],
        ['8', 'Shuttle', '3', 'No'],
        ['9', 'Bus ', '3', 'No'],
        ['10', '2', '3', 'No'],
        ['10', '2', '3', 'No'],
        ['10', '2', '3', 'No'],
        ['10', '2', '3', 'No'],
        ['10', '2', '3', 'No'],
        ['11', 'b', 'c', 'Yes']
      ]
    }

 

    return (
        <ScrollView>
        <View style={styles.container}>
          
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
        <View style={styles.button}>
        <Button title="Edit INVENTORY" color="black"onPress={() => alert("Edit inventory")}/>

        </View>
        </ScrollView>
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
  
    table: {
      marginTop: 20,
      width: "90%",
      backgroundColor: "grey",
    },
    head: {
      height: 40,
      backgroundColor: "#f1f8ff",
      textAlignVertical: 'center',
      textAlign: 'center',
      
    },
    text: {
      textAlign: "center",
      height: 48,
      textAlignVertical: 'center'
    },
    button: {
        marginBottom: 50
    }
    


  });
  


export default AdminInventory;
