import Router, { NextFunction } from 'express';
import data from '../../data.json';

const router = Router();

const getFilms: Controller = (req, res) => {
   const films = data.films;
   return res.status(200).json({ success: true, message: 'success',  data: {films: films}});
};

const getFilmsById: Controller = (req, res) => {
   const { id } = req.params;
   const films = data.films;

   const film = films.find((film) => film.id === id);

   if (!film) {
       return res.status(404).json({ success: false, message: 'Film not found' });
   }
   return res.status(200).json({ data:{ films: film}, success: true, message: 'success' });
};

router.get('/films', getFilms);
router.get('/films/:id', getFilmsById)

export default router;