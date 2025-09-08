import {getAllData} from '../services/postService.js'


export async function getAllPosts(req, res) {
    try {
        const PostsArray = await getAllData()
        res.status(200).json({ "posts": PostsArray });
    }
    catch (err) {
        res.status(500).json({ "error": `get posts request failed: \n ${err}` });
    }
}

