import React, { useEffect, useState } from "react";
import "C:/Users/עזריאל/source/repos/Linkodcode web/frontEnd/src/css/mainContent.css";
import PostsPage from "../../pages/PostsPage";
import type { Post } from "../../itemType";

export default function MainContent() {
  const [postData, setPostData] = useState<Post[]>([]);

  useEffect(() => {
        fetch("http://localhost:3000/post")
            .then(data => data.json())
            .then(posts => setPostData(posts))
            .catch(err=>{console.log({err:`get posts from server failed: ${err.message}`})})
    }, []);
  return (
    <main>
      <PostsPage data={postData} />
    </main>
  );
}
