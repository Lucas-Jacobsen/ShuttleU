import React from 'react';
import { ImageBackground, StyleSheet,View, Dimensions , Text, Button, Alert, Pressable} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Image } from 'expo-image';
import RiderMain from './src/screens/Rider/RiderMain';
import DriverMain from './src/screens/DriverMain';
import AdminMain from './src/screens/Admin/AdminMain'


const Stack = createNativeStackNavigator<RootStackParamList>();
const { width, height } = Dimensions.get("window");
const bImage = '../shuttleu/src/assets/vecteezy_minimal-background-purple-color-and-there-are-two-lines-on_12847530_386.jpg';

export default function App() {
 
   
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
        <Stack.Screen name="RiderMain" component={RiderMain} options={{title: 'RiderMain'}} />
        <Stack.Screen name="DriverMain" component={DriverMain} options={{title: 'DriverMain'}} />
        <Stack.Screen name="AdminMain" component={AdminMain} options={{title: 'DriverMain'}} />

      </Stack.Navigator>
    </NavigationContainer>

     
  );
}

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<LoginProps> = (props) =>{
  return(
     <View style={styles.container}>
      <ImageBackground source={require(bImage)} resizeMode="stretch" style={styles.bImage}>
    <Image
    style={styles.image}
    source={require('./src/assets/Control-V-removebg-preview.png')} 
       contentFit="cover"
    placeholder="Logo"
    ></Image>


    <Pressable style={styles.button} onPress={() => props.navigation.push("RiderMain")}><Text style={styles.text}>Rider Main</Text></Pressable>
    <Pressable style={styles.button} onPress={() => props.navigation.push("DriverMain")}><Text style={styles.text}>Driver Main </Text></Pressable>
    <Pressable style={styles.button} onPress={() => props.navigation.push("AdminMain")}><Text style={styles.text}>Admin Main</Text></Pressable>

    

    </ImageBackground>
  </View>
);};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    backgroundColor: "#f1f1f1",
    flex: 1,
    
  }, 
  header:{
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center'
       

  },
  image:{
    width: 342,
    height: 116 ,
    resizeMode: 'cover',
    marginTop: 100
    
    },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 2.5,
    elevation: 3,
    width: 300,
    marginTop: 50,
  
  },
  text: {
    fontSize: 36,
    lineHeight: 50,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'black',
  },
  bImage:{
    height: height,
    width: width,
    alignItems:'center',
    
  
  }
  
});
