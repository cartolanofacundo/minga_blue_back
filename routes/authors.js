// aca voy a definir los endpoints de los autores y los voy a exportar para poder utilizarlos en el enrutador principal

import express from 'express'
import read from '../controllers/authors/read.js'
let router = express.Router();

/* router.post('/', function(req,res,next){
    res.status(200).send("autor creado")
}); */
router.get('/', read);
/* router.put('/:id', function(req, res, next){
    res.status(200).send("autor modificado")
});
router.delete('/id', function(req, res, next){
    res.status(200).send("autor eliminado")
}); */

export default router;