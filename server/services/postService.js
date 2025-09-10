import { response } from "express";
import data from "../db/posts.json" with { type: "json" };



export function getAllData() {
    return data;
}