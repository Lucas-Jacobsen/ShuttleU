export class Shuttle {
  constructor(
    public id: number,
    public type: string,
    public code: string,
    public status: number,
    public lat: number,
    public lon: number
  ) {}
}