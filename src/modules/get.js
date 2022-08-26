import { myGameUrl } from './add.js';

const getScores = async () => {
  try {
    const resScore = await fetch(myGameUrl);
    const playerInfo = await resScore.json();
    return playerInfo;
  } catch (error) {
    return false;
  }
};

export { getScores as default };