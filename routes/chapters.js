import express from 'express'
import read from '../controllers/chapters/read.js'
let router = express.Router();

router.get('/', read );

export default router;