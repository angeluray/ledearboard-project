import getScores from './get.js';

const myList = document.getElementById('myList');

const displayUserScores = async () => {
  const myPlayers = await getScores();
  myList.innerHTML = '';
  myPlayers.result.sort((a, b) => b.score - a.score);
  myPlayers.result.forEach((player) => {
    myList.innerHTML += `<li class="item">${player.user} : ${player.score}</li>`;
  });
};

export { displayUserScores as default };