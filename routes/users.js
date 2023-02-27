import express from 'express';
import User from '../models/data/User.js';
let router = express.Router();

/* POST users endpoint. */
router.post('/', async (req, res) => {
  try{
    const user = User.create(req.body);
    return res.status(201).json({succes : true, data: user, message: 'usuario creado'});
  }
  catch(err){
    console.log(err);
    return res.status(400).json({succes : false, message: 'usuario no creado'});
  }
});
  

export default router;

