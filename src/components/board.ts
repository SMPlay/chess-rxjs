import { Horse, King, Pawn, Queen, Rook } from './figures';

export interface CellOptions {
  className?: string;
  cellNumber?: number | null;
  cellLetter?: string | null;
  oddRow?: boolean;
  oddCell?: boolean;
}

export interface AdditionalCellInfo {
  className: string;
  info: string | number;
  oddRow?: boolean;
  oddCell?: boolean;
}

export class Board {
  private cells: number[][];
  private cellLetters: string[];
  private parent: Element | null;
  private chessField: HTMLDivElement;

  constructor(parentElement: Element | null) {
    this.chessField = document.createElement('div');
    this.parent = parentElement;
    this.cells = [
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
    ];
    this.cellLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  }

  private createFigures() {
    const container = document.createElement('div') as Element;

    const blackHorse = new Horse({ x: 0, y: 0 }, container, 'black');
    const whiteHorse = new Horse({ x: 0, y: 0 }, container, 'white');
    const blackKing = new King({ x: 0, y: 0 }, container, 'black');
    const whiteKing = new King({ x: 0, y: 0 }, container, 'white');
    const blackPawn = new Pawn({ x: 0, y: 0 }, container, 'black');
    const whitePawn = new Pawn({ x: 0, y: 0 }, container, 'white');
    const blackQueen = new Queen({ x: 0, y: 0 }, container, 'black');
    const whiteQueen = new Queen({ x: 0, y: 0 }, container, 'white');
    const blackRook = new Rook({ x: 0, y: 0 }, container, 'black');
    const whiteRook = new Rook({ x: 0, y: 0 }, container, 'white');

    return container;
  }

  private addAdditionalCellInfo({ className, info, oddRow, oddCell }: AdditionalCellInfo) {
    const element = document.createElement('div');

    element.classList.add(className);
    oddRow && element.classList.add(`${className}--odd`);
    oddCell && element.classList.add(`${className}--odd`);
    element.textContent = String(info);

    return element;
  }

  private createCell({ oddRow, className = '', cellLetter, cellNumber, oddCell }: CellOptions) {
    const element = document.createElement('div');
    element.classList.add(className);

    cellNumber && element.appendChild(this.addAdditionalCellInfo({ className: `${className}-number`, info: cellNumber, oddRow, oddCell }));
    cellLetter && element.appendChild(this.addAdditionalCellInfo({ className: `${className}-letter`, info: cellLetter, oddRow, oddCell }));

    return element;
  }

  createBoard() {
    this.chessField.classList.add('chess-field');

    this.cells.forEach((row, rowIndex) => {
      const chessRow = document.createElement('div');
      chessRow.classList.add('cells-row');

      row.forEach((cell, cellIndex) => {
        const options: CellOptions = {
          cellNumber: cellIndex === 0 ? this.cells.length - rowIndex : null,
          cellLetter: rowIndex === this.cells.length - 1 ? this.cellLetters[cellIndex] : null,
          oddRow: !(rowIndex % 2),
          oddCell: !!(cellIndex % 2),
        };

        chessRow?.appendChild(this.createCell({
          ...options,
          className: cell === 1 ? 'chess-field__cell--black' : 'chess-field__cell'
        }));
      });

      this.chessField?.appendChild(chessRow);
    });

    this.parent?.appendChild(this.chessField);
    this.parent?.appendChild(this.createFigures());
  }
}
