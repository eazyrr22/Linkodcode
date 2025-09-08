import { getImg } from "../services/imgService";


export async function getImgById(req, res) {
    try {
        const imgId = req.params.id
        const url = "server/db/assets/" + id + ".png"
        const result = await getImg(url)
        res.status(200).json({ img: result })
    } catch (error) {
        res.status(500).json({ error: `failed to get img by id:${error.message}` })
    }
}