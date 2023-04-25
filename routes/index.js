import express from 'express'
import userRouter from './users.js'
import authorRouter from './authors.js'
import categoryRouter from './categories.js'
import chapterRouter from './chapters.js'
import mangaRouter from './mangas.js'
import companyRouter from './companies.js'
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINGA API', subtitle: "endpoints of minga" });
});

router.use('/authors', authorRouter);
router.use('/categories', categoryRouter);
router.use('/chapters', chapterRouter);
router.use('/companies', companyRouter);
router.use('/mangas', mangaRouter);
router.use('/auth', userRouter);

export default router;
