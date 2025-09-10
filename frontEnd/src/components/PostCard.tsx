import React from "react";
import "../css/post-style.css";
import type { Post } from "../itemType";

export default function PostCard(post: Post) {
  return (
    <div className="post-card">
      <h2>Card Title</h2>
      <div className="post-head">
        <div className="post-head-item">
          <img src={post.imgUrl} alt="post img" />
          <h3 className="">{post.authorName}</h3>
        </div>
        <div className="post-head-item">
          <img src="src/assets/like-icon.png" alt="" />
          <h4>{Date().toString()}</h4>
        </div>
      </div>
      <p className="post-main-article">post description{post.description}</p>
    </div>
  );
}
