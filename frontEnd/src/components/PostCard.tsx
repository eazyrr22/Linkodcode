import React from "react";
import "../css/post-style.css";
import type { Post } from "../itemType";

export default function PostCard(post: Post) {
  return (
    <div className="post-card">
      <div className="post-head">
        <div className="post-head-item-left">
          <img src={post.imgUrl} alt="post img" />
          <h3 className="">{post.authorName}</h3>
        </div>
        <div className="post-head-item-right">
          <img src="src/assets/like-icon.png" alt="" />
          <h4>{new Date().toLocaleDateString()}</h4>
        </div>
      </div>
      <p className="post-main-article">post description{post.description}</p>
    </div>
  );
}
