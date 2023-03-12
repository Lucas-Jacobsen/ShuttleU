import React from "react";
import { StyleSheet, View, Dimensions, Text, Button, Alert,} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell,} from "react-native-table-component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { NavigationContainer } from "@react-navigation/native";
import ViewReservations from "./ViewReservations";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function DriverMainPage(){
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen name="DriverMain" component={DriverMain} options={{title: 'DriverMain'}} />
        <Stack.Screen name="ViewReservations" component={ViewReservations} options={{title: 'ViewReservations'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

type DriverMainProps = NativeStackScreenProps<RootStackParamList, "DriverMain">;

const DriverMain: React.FC<DriverMainProps> = (props) => {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Driver Main</Text>
         
    
          
          <View style={styles.button}>
            <Button title="VIEW RESERVATIONS" onPress={() => props.navigation.push("ViewReservations")}
            />
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
      marginTop: 30,
      backgroundColor: "#68a0cf",
      borderRadius: 15,
    },
  });
  


