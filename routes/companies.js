import express from 'express'
import read from '../controllers/companies/read.js'
let router = express.Router();

router.get('/', read );

export default router;