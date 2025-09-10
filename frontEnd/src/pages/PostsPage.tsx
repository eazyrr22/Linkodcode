import PostCard from "../components/PostCard";
import type { Post } from "../itemType";
import { useId } from "react";

export default function PostsPage({ data }:Post[]) {       // set the data type
  
  return (
    <div>
      <ul>
        {[data].map((post: Post) => (
            <li key={useId()}>
              <PostCard
                imgUrl={post.imgUrl}
                description={post.description}
                authorName={post.authorName}
              ></PostCard>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
