import { Router } from 'express';
import { getAllPosts,getPostById } from '../controllers/postConrtoller.js';

const router = Router();

router.get('/', getAllPosts)
router.get('/:postId',getPostById)
// router.post('/', addPost)
// router.put('/:PostId', updatePost)
// router.delete('/:PostId', deletePost)

export default router;
