import { Router } from 'express';
import { getAllPosts } from '../controllers/postConrtoller.js';

const router = Router();

router.get('/', getAllPosts)
router.get('/:postId', )
router.post('/', addPost)
router.put('/:PostId', updatePost)
router.delete('/:PostId', deletePost)

export default router;
