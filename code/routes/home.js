var express=require('express');
const router = express.Router();
const NewControllers=require('../app/controllers/NewControllers');

router.get('/:slug',NewControllers.show );

router.get('/',NewControllers.index );


module.exports=router