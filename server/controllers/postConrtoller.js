import { getAllData,getPost } from '../services/postService.js'


export function getAllPosts(req, res) {
    try {
        const data = getAllData();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ "error": `get posts request failed: \n ${err}` });
    }
}
export async function getPostById(req, res) {
    try {
        const postId = req.params.id
        const post = getPost(postId);
        if(!post){
        res.status(204).json({message:"post not found"});    
        }
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json({ "error": `get posts request failed: \n ${err}` });
    }
}

