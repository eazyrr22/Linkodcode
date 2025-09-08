export  async function getImg(req, res) {
    try {
        const imgId = req.params.id
        const result = await fetch("server/db/assets/" + id + ".png")
        res.status(200).json({ img: result })
    } catch (error) {
        res.status(500).json({ error: `failed to get img by id:${error.message}` })
    }
}