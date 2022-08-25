import './style.css';
import { addPlayer } from './modules/add.js';
import displayUserScores from './modules/display.js';

const myBtn = document.getElementById('myForm');
const myRefreshBtn = document.getElementById('myRefresh');

myBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  addPlayer();
});

myRefreshBtn.addEventListener('click', () => {
  displayUserScores();
});
