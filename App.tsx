import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Alert,
  Pressable,
  TextInput,
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
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Image } from "expo-image";
import RiderMain from "./src/screens/Rider/RiderMain";
import DriverMain from "./src/screens/Driver/screens/DriverMain";
import AdminMain from "./src/screens/Admin/screens/AdminMain";
import { loadedShuttleData } from "./src/datasource/dataLoader";
import { Shuttle } from "./src/models/Shuttle";

const Stack = createNativeStackNavigator<RootStackParamList>();
const { width, height } = Dimensions.get("window");
const bImage =
  "../shuttleu/src/assets/vecteezy_minimal-background-purple-color-and-there-are-two-lines-on_12847530_386.jpg";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="RiderMain"
          component={RiderMain}
          options={{ title: "RiderMain" }}
        />
        <Stack.Screen
          name="DriverMain"
          component={DriverMain}
          options={{ title: "DriverMain" }}
        />
        <Stack.Screen
          name="AdminMain"
          component={AdminMain}
          options={{ title: "DriverMain" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<LoginProps> = (props) => {
  const [shuttleCode, setShuttleCode] = React.useState<string>("");

  const handleDriverMainClick = () => {
    if (shuttleCode && isShuttleCodeValid(shuttleCode)) {
      const selectedShuttle = loadedShuttleData.find(
        (shuttle) => shuttle.code === shuttleCode
      );
      if (selectedShuttle) {
        props.navigation.push("DriverMain");
      } else {
        Alert.alert("Shuttle not found");
      }
    } else {
      Alert.alert("Please enter a valid shuttle code");
    }
  };

  const isShuttleCodeValid = (code: string): boolean => {
    return loadedShuttleData.some((shuttle) => shuttle.code === code);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(bImage)}
        resizeMode="stretch"
        style={styles.bImage}
      >
        <Image
          style={styles.image}
          source={require("./src/assets/Control-V-removebg-preview.png")}
          contentFit="cover"
          placeholder="Logo"
        ></Image>

        <Pressable
          style={styles.button}
          onPress={() => props.navigation.push("RiderMain")}
        >
          <Text style={styles.text}>Rider Main</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleDriverMainClick}>
          <Text style={styles.text}>Driver Main </Text>
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder="Enter Shuttle Code"
          onChangeText={(text) => setShuttleCode(text)}
          value={shuttleCode}
        />
        <Pressable
          style={styles.button}
          onPress={() => props.navigation.push("AdminMain")}
        >
          <Text style={styles.text}>Admin Main</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  header: {
    fontSize: 30,
    marginTop: 50,
    textAlign: "center",
  },
  image: {
    width: 342,
    height: 116,
    resizeMode: "cover",
    marginTop: 100,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    borderColor: "grey",
    borderWidth: 2.5,
    elevation: 3,
    width: 300,
    marginTop: 50,
  },
  text: {
    fontSize: 36,
    lineHeight: 50,
    fontWeight: "400",
    letterSpacing: 0.25,
    color: "black",
  },
  bImage: {
    height: height,
    width: width,
    alignItems: "center",
  },
  input: {
    height: 40, // Adjust the height as needed
    borderColor: "gray", // Border color
    borderWidth: 1, // Border width
    paddingHorizontal: 10, // Horizontal padding
    marginTop: 10,
  },
});
