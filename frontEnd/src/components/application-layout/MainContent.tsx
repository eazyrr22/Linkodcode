import React, { useEffect, useState } from "react";
import "../../css/mainContent.css";
import PostsPage from "../../pages/PostsPage";
import type { Post } from "../../itemType";

export default function MainContent() {
  const [postData, setPostData] = useState<Post[]>([]);

  useEffect(() => {
        fetch("http://localhost:3000/post?id=1")
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
