import {getAllData} from '../services/postService.js'


export function getAllPosts(req, res) {
    try {
        const data = getAllData();
        res.status(200).json( data );
    }
    catch (err) {
        res.status(500).json({ "error": `get posts request failed: \n ${err}` });
    }
}

