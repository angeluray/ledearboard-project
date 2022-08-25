import displayUserScores from './display.js';

const myPlayerName = document.getElementById('myName');
const myScore = document.getElementById('myNumber');
const myApiKey = 'zS0rIfoFWrgvPqHF0nHr';
const myGameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myApiKey}/scores`;

const addPlayer = async () => {
  try {
    const myResponse = await fetch(myGameUrl, {
      method: 'POST',
      body: JSON.stringify({
        user: myPlayerName.value,
        score: myScore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    myPlayerName.value = '';
    myScore.value = '';
    return myResponse.json();
  } catch (error) {
    return false;
  }
};

export {
  myGameUrl, myApiKey, myScore, myPlayerName, addPlayer,
};