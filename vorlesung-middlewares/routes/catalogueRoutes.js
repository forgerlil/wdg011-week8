import express from 'express';
import tonightsGame from '../middlewares/tonightsGame.js';
const catalogueRoute = express.Router();

catalogueRoute.get('/', (req, res) => {
  console.log(req.dataFromMiddleware);
  return res.send(catalogue);
});

catalogueRoute.get('/pickGame', tonightsGame, (req, res) => {
  return res.send(`Tonight we are playing ${req.game.name}`);
});

export default catalogueRoute;
