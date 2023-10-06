class ShuttleTripData {
    constructor(
      public shuttleId: number,
      public lat: number,
      public lon: number,
      public dropoff: number,
      public pax: number,
      public dur: number
    ) {}
  }
  /**
   * SELECT
    s.shuttleId,
    s.lat,
    s.long,
    t.dropoff,
    t.pax,
    t.dur
FROM
    Shuttle AS s
JOIN
    Trip AS t
ON
    s.shuttleId = t.shuttleId;

   */
  export default ShuttleTripData;
  