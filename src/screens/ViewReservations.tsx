import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Alert,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
const ViewReservations = () => {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>ViewReservations</Text>
         
    
          
          <View style={styles.button}>
            <Button title="RESERVE A RIDE" onPress={() => Alert.alert("Button with adjusted color pressed")}
            />
          </View>
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
    button: {
      marginTop: 30,
      backgroundColor: "#68a0cf",
      borderRadius: 15,
    },
  });
  


export default ViewReservations;
