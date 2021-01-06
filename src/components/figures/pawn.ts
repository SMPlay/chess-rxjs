import { Coordinate } from "types/coordinate";
import { TeamType } from 'types/team-type';
import { Figure, FigureCreator } from "./figure";

export class Pawn extends Figure {
  constructor(coordinate: Coordinate, parent: Element | null, team: TeamType) {
    super(coordinate);

    FigureCreator.createFigure(team === 'black' ? 'blackPawn' : 'whitePawn', parent);
  }

  move() {}
}
