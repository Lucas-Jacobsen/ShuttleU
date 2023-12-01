export class Trip {
       id: number;
       Shuttleid: number;
       pickup: number;
       dropoff: number;
       pax: number;
       dur: number;

    
    constructor(id: number, Shuttleid: number, pickup: number, dropoff: number, pax: number, dur: number) {
      this.id = id;
      this.Shuttleid = Shuttleid;
      this.pickup = pickup;
      this.dropoff = dropoff;
      this.pax = pax;
      this.dur = dur;
    }
  
  }