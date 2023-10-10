import data from './data.json'
import { Bldg } from './models/bldg';
import { Shuttle } from './models/Shuttle';
import ShuttleTripData from './models/ShuttleTripData';
import { Trip } from './models/Trip';

// Read data from data.json


// Extract data from JSON
const { sampleList, sampleData, sampleTrips, sampleBuildings } = data;

// Define empty arrays initially
export const loadedShuttleData: Shuttle[] = sampleList.map((item: any) => {
  return new Shuttle(
    item.id,
    item.type,
    item.code,
    item.active,
    item.lat,
    item.lon
  );
});

export const loadedShuttleTripData: ShuttleTripData[] = sampleData.map((item: any) => {
  return {
    shuttleId: item.shuttleId,
    lat: item.lat,
    lon: item.lon,
    dropoff: item.dropoff,
    pax: item.pax,
    dur: item.dur,
  };
});

export const loadedTripData: Trip[] = sampleTrips.map((item: any) => {
  return new Trip(
    item.id,
    item.shuttleId,
    item.userId,
    item.dropoff,
    item.pax,
    item.dur
  );
});

export const loadedBldgData: Bldg[] = sampleBuildings.map((item: any) => {
  return {
    name: item.name,
    number: item.number,
    lat: item.lat,
    long: item.long,
  };
});
