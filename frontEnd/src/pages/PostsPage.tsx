import PostCard from "../components/PostCard";
import type { Post } from "../itemType";
import { useId } from "react";

export default function PostsPage({ data }: Post[]) {                           // TODO: set the data type
  
  const postsArr = [data].map((post: Post) => (
    <li key={useId()} className="post-list-item">
      <PostCard
        imgUrl={post.imgUrl}
        description={post.description}
        authorName={post.authorName}
      ></PostCard>
    </li>
  ));
  return <ul id="posts-list">{postsArr}</ul>;
}
