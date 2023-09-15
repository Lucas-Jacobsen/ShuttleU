import React from "react";
import { StyleSheet, View, Dimensions, Text, Button, Alert, ImageBackground,} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell,} from "react-native-table-component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types";
import { NavigationContainer } from "@react-navigation/native";
import RiderMain from "../../Rider/RiderMain"
import AdminInventory from "./AdminInventory";
import AdminLogs from "./AdminLogs";

const Stack = createNativeStackNavigator<RootStackParamList>();
const { width, height } = Dimensions.get("window");


export default function AdminMainPage(){
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AdminMain" component={AdminMain}  />
        <Stack.Screen name="RiderMain" component={RiderMain} options={{title: 'Map'}} />
        <Stack.Screen name="AdminInventory" component={AdminInventory} options={{title: 'Inventory'}} />
        <Stack.Screen name="AdminLogs" component={AdminLogs}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )

}

type AdminMainProps = NativeStackScreenProps<RootStackParamList, "AdminMain">;

const AdminMain: React.FC<AdminMainProps> = (props) => {
    return (
        <View style={styles.container}>
           <ImageBackground source={require('../../../../src/assets/ShuttleU-BackgroundImage.jpg')} resizeMode="cover" style={styles.bImage}>
            <Text style={styles.header}>Admin Main</Text>
         
    
          
          <View style={styles.button}>

            <Button title="VIEW MAP" color="black"onPress={() => props.navigation.push("RiderMain")}/>
            </View>
            <View style={styles.button}>
            <Button title="VIEW INVENTORY" color="black"onPress={() => props.navigation.push("AdminInventory")}/>
          </View>
          <View style={styles.button}>
            <Button title="VIEW LOGS" color="black"onPress={() => props.navigation.push("AdminLogs")}/>
          </View>
        </ImageBackground>
        </View>
      );
    };

const styles = StyleSheet.create({
    header: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 50
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    bImage:{
      width: width,
      height: height
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
   alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderColor: 'grey',
    borderWidth: 2.5,
    elevation: 3,
    width: 300,
    marginTop: 20,
    },
  });
  


