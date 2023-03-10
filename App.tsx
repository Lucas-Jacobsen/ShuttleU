import React from 'react';
import { StyleSheet,View, Dimensions , Text} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';


const {width, height} = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = 
    {
      latitude: 33.513154,
      longitude: -112.125235,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };

export default function App() {
 

    
    let state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    }
 
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
       /*provider={PROVIDER_GOOGLE}*/
        initialRegion={INITIAL_POSITION}/>

        <View style={styles.table}>
        <Text>Hello</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '90%',
    height: '60%',
   
  },
  table:{
     
    width: "90%", 
    backgroundColor: "grey"
  },
  head: {

  },
  text:{

  }
});
