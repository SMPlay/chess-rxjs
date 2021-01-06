import { Board } from './components';

import './style/style.scss';

const parent = document.getElementById('some-container');
const board = new Board(parent);

board.createBoard();
