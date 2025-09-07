import React from "react";
import Post from "../components/PostCard";
import { posts } from "../posts/posts.json";

export default function PostsPage(filePath: string) {
  const postsList: string = JSON.stringify(posts);
  const formatedPosts: object[] = JSON.parse(postsList);
  const postsPage = formatedPosts.map((post: Post) => {
    return (
      <li>
        <Post imgUrl={} description={} authorName={} datePublish={}></Post>
      </li>
    );
  });

  return (
    <div>
      <ul>{postsPage}</ul>
    </div>
  );
}
