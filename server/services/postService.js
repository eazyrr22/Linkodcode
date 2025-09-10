import { response } from "express";
import posts from "../db/posts.json" with { type: "json" };


export function getAllData() {
    return posts;
}

export function getPost(id) {
    const data = posts;
    let foundPost;
    for (const post of data) {
        if (post.id == id) {
            foundPost = post
        };
    }
    return foundPost;
}