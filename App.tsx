import React from 'react';
import { StyleSheet,View, Dimensions , Text, Button, Alert} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import RiderMain from './src/screens/RiderMain';
import { RootStackParamList } from './types';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Image } from 'expo-image';
import DriverMain from './src/screens/DriverMain';


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
 
   
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
        <Stack.Screen name="RiderMain" component={RiderMain} options={{title: 'RiderMain'}} />
        <Stack.Screen name="DriverMain" component={DriverMain} options={{title: 'DriverMain'}} />
      </Stack.Navigator>
    </NavigationContainer>

     
  );
}

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;
 
const Login: React.FC<LoginProps> = (props) =>{
  return( <View style={styles.container}>
    <Text style={styles.header}>Login Screen</Text>
    <Image
    style={styles.image}
    source= '/assets/Control-V-removebg-preview.png'
    contentFit="cover"
    placeholder="Logo"
    ></Image>


    <Button title='Go to RiderMain' onPress={() => props.navigation.push("RiderMain")} />

    <Button title='Go To DriverMain' onPress={() => props.navigation.push("DriverMain")} />
  </View>
);};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "grey",
    flex: 1,
  }, 
  header:{
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center'
       

  },
  image:{
    width: 80,
    height: 10
    },
  button:{
    marginTop: 30,
    backgroundColor: '#68a0cf',
    borderRadius: 15
  }
});
