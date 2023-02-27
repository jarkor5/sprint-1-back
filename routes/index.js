import usersRouter from './users.js';
import express from 'express';
import createError from 'http-errors';

const router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
res.render('index', { title: 'Api de prueba' });
});

router.use('/users', usersRouter)
export default router; 