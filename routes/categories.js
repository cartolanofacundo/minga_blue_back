import express from 'express'
import read from '../controllers/categories/read.js'
let router = express.Router();

router.get('/', read );

export default router;