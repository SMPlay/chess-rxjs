import { Coordinate } from "types/coordinate";

export abstract class Figure {
  protected coordinate: Coordinate;

  constructor(coordinate: Coordinate) {
    this.coordinate = coordinate;
  }

  protected move() {}
}
