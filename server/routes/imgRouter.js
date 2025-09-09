import { Router } from 'express';
import { getImgById } from '../controllers/imgController.js';

const router = Router();

router.get('/:id', getImgById)


export default router;
