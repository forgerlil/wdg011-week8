import catalogue from '../data.json' assert { type: 'json' };
import ErrorStatus from '../utils/ErrorStatus.js';

const tonightsGame = (req, res, next) => {
  try {
    const busyHours = Math.floor(Math.random() * 25) < 18;
    if (busyHours)
      throw new ErrorStatus('Now is not the time for games :(', 403);

    req.game = catalogue[Math.floor(Math.random() * 3)];
    next();
  } catch (error) {
    next(error);
  }
};

export default tonightsGame;
