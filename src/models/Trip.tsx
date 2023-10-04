export class Trip {
       id: number;
       shuttle: string;
       pickup: string;
       dropoff: string;
       pax: number;
       dur: number;

    
    constructor(id: number, shuttle: string, pickup: string, dropoff: string, pax: number, dur: number) {
      this.id = id;
      this.shuttle = shuttle;
      this.pickup = pickup;
      this.dropoff = dropoff;
      this.pax = pax;
      this.dur = dur;
    }
  }