import React from "react";
import PostCard from "../components/PostCard";
import type { Post } from "../itemType";

export default function PostsPage(data:JSON) {
  
  const formatedData:Post[]= JSON.parse(data) // TODO : import and convert json data to Post obj

  const postsPage = formatedData.map((post: Post) => {
    
      <li>
        <PostCard imgUrl={post.imgUrl} description={post.description} authorName={post.authorName}></PostCard>
      </li>
    
})

  return (
    <div> 
      <ul>{postsPage}</ul>
    </div>
  );
}
