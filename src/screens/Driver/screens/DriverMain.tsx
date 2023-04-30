import React from "react";
import { StyleSheet, View, Dimensions, Text, Button, Alert, ImageBackground, Pressable,} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell,} from "react-native-table-component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Surface } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import ViewReservations from "./ViewReservations";
import StartTrip from "./StartTrip";
import ViewShuttleLogs from "./ViewShuttleLogs";

const Stack = createNativeStackNavigator<RootStackParamList>();
const { width, height } = Dimensions.get("window");

export default function DriverMainPage(){
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DriverMain" component={DriverMain} options={{title: 'DriverMain'}} /> 
        <Stack.Screen name="StartTrip" component={StartTrip} options={{title: 'StartTrip'}} />
        <Stack.Screen name="ViewReservations" component={ViewReservations} options={{title: 'ViewReservations'}} />
        <Stack.Screen name="ViewShuttleLogs" component={ViewShuttleLogs} options={{title: 'ViewShuttleLogs'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

type DriverMainProps = NativeStackScreenProps<RootStackParamList, "DriverMain">;

const DriverMain: React.FC<DriverMainProps> = (props) => {
    return (
        <View style={styles.container}>
          <ImageBackground source={require('../assets/ShuttleU-BackgroundImage.jpg')} resizeMode="cover" style={styles.bImage}>

          <View>
            <Text style={styles.header}>Driver Main</Text>
         
    
         
            <Pressable style={styles.button} onPress={() => props.navigation.push("StartTrip")}><Text style={styles.text}>Start Trip</Text></Pressable>
            <Pressable style={styles.button} onPress={() => props.navigation.push("ViewReservations")}><Text style={styles.text}>Reservations</Text></Pressable>
            <Pressable style={styles.button} onPress={() => props.navigation.push("ViewShuttleLogs")}><Text style={styles.text}>Logs</Text></Pressable>

        </View>
        </ImageBackground>
        </View>
      );
    };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },  
    header: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 45
    },
    text: {
      fontSize: 36,
      lineHeight: 50,
      fontWeight: '400',
      letterSpacing: 0.25,
      color: 'black',    
      textAlign: 'center'}
      ,
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      borderColor: 'grey',
      borderWidth: 2.5,
      elevation: 3,
      width: 300,
      marginTop: 20,
    },
    bImage: {
      height: height,
      width: width,
      alignItems:'center'
    }
  });
  


