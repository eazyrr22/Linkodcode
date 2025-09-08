import { Router } from 'express';
import { getImg } from '../controllers/imgController.js';

const router = Router();

router.get('/:id', getImg)


export default router;
