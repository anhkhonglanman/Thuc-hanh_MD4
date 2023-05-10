import {Router} from "express";
import carController from "../controller/carController";

const router = Router();
// router.use('/products', productRouter);
router.get('/cars', carController.findAll)
export default router;