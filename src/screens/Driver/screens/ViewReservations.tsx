import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Button,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Cell,
} from "react-native-table-component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import ViewReservationsTable from "../components/ViewReservationsTable";
import { Trip } from "../../../models/Trip";
import { getCurrentPosition } from "react-native-geolocation-service";
import {
  CurrentRenderContext,
  NavigationContainer,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { RootStackParamList } from "../../../../types";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import CurrentTrip from "./CurrentTrip";
import DriverMain from "./DriverMain";

const { width, height } = Dimensions.get("window");

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function ViewReservationsPage() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ViewReservations" component={ViewReservations} />
        <Stack.Screen name="CurrentTrip" component={CurrentTrip} />
        <Stack.Screen name="DriverMain" component={DriverMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type ViewReservationProps = { navigation: any };

const ViewReservations: React.FC<ViewReservationProps> = ({ navigation }) => {
  const handleCancel = () => {
    navigation.navigate("DriverMain");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../src/assets/ShuttleU-BackgroundImage.jpg")}
        resizeMode="cover"
        style={styles.bImage}
      >
        <View>
          <Text style={styles.header}>View Reservations</Text>
          <ViewReservationsTable navigation={navigation} />
          <Pressable style={styles.buttonCancel} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginTop: 50,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
  },
  buttonCancel: {
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    borderColor: "red",
    borderWidth: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  bImage: {
    height: height,
    width: width,
    alignItems: "center",
  },
});
