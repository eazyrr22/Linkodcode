import React from "react";
import jsonData from "/Users/עזריאל/source/repos/Linkodcode web/frontEnd/src/posts/posts.json";
import "frontEnd/src/css/mainContent.css";
import PostsPage from "../../pages/PostsPage";

export default function MainContent() {
  return (
    <main>
      <PostsPage data={jsonData} />
    </main>
  );
}
