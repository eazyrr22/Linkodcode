import React, { type JSX } from "react";
import PostCard from "../components/PostCard";
import type { Post } from "../itemType";

export default function PostsPage({data}:any) {           // set the data type   
  const jsonData: Post[] = data;
  return (
    <div>
      <ul>
        {jsonData.map((post: Post) => (           // TODO : fix the map loop issue
          <li>
            <PostCard
              imgUrl={post.imgUrl}
              description={post.description}
              authorName={post.authorName}
            ></PostCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
