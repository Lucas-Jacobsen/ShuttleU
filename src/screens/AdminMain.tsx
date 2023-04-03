import React from "react";
import { StyleSheet, View, Dimensions, Text, Button, Alert,} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell,} from "react-native-table-component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { NavigationContainer } from "@react-navigation/native";
import ViewReservations from "./ViewReservations";
import RiderMain from "./RiderMain";
import AdminInventory from "./AdminInventory";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AdminMainPage(){
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen name="AdminMain" component={AdminMain} options={{title: 'AdminMain'}} />
        <Stack.Screen name="RiderMain" component={RiderMain} options={{title: 'Map'}} />
        <Stack.Screen name="AdminInventory" component={AdminInventory} options={{title: 'Inventory'}} />

      </Stack.Navigator>
    </NavigationContainer>
  )

}

type AdminMainProps = NativeStackScreenProps<RootStackParamList, "AdminMain">;

const AdminMain: React.FC<AdminMainProps> = (props) => {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Admin Main</Text>
         
    
          
          <View style={styles.button}>

            <Button title="VIEW MAP" color="black"onPress={() => props.navigation.push("RiderMain")}/>
            </View>
            <View style={styles.button}>
            <Button title="VIEW INVENTORY" color="black"onPress={() => props.navigation.push("AdminInventory")}/>
          </View>
        </View>
        </View>
      );
    };

const styles = StyleSheet.create({
    header: {
      fontSize: 30,
      textAlign: 'center'
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
      margin: 30,
      borderBottomWidth: 1,
      borderColor: 'green',
      
      backgroundColor: "#f1f1f1",
      borderRadius: 15,
      color: 'black'
    },
  });
  


