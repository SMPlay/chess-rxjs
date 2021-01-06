import { FigureType } from './figure-type';
import blackHorse from './figure-icons/black-horse.svg';
import blackKing from './figure-icons/black-king.svg';
import blackPawn from './figure-icons/black-pawn.svg';
import blackQueen from './figure-icons/black-queen.svg';
import blackRook from './figure-icons/black-rook.svg';
import whiteHorse from './figure-icons/white-horse.svg';
import whiteKing from './figure-icons/white-king.svg';
import whitePawn from './figure-icons/white-pawn.svg';
import whiteQueen from './figure-icons/white-queen.svg';
import whiteRook from './figure-icons/white-rook.svg';

export interface FiguresType {
  blackHorse: string;
  blackKing: string;
  blackPawn: string;
  blackQueen: string;
  blackRook: string;
  whiteHorse: string;
  whiteKing: string;
  whitePawn: string;
  whiteQueen: string;
  whiteRook: string;
}

export abstract class FigureCreator {
  private static figures: FiguresType = {
    blackHorse,
    blackKing,
    blackPawn,
    blackQueen,
    blackRook,
    whiteHorse,
    whiteKing,
    whitePawn,
    whiteQueen,
    whiteRook
  }

  static createFigure(figureType: FigureType, parent: Element | null) {
    const figureContainer = document.createElement('div');
    const figure = document.createElement('img');
  
    figureContainer.classList.add('figure-container');
    figure.setAttribute('src', FigureCreator.figures[figureType])
    figure.classList.add('figure');

    figureContainer.appendChild(figure);

    parent?.appendChild(figureContainer);
  }
}
