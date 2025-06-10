import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";

interface InstagramMedia {
  media_url: string;
  timestamp: string;
  caption: string;
  permalink: string;
}

interface InstagramResponse {
  media: {
    data: InstagramMedia[];
  };
}

export default function Instagram() {
  const [allPosts, setAllPosts] = useState<InstagramMedia[]>([]);

  useEffect(() => {
    fetch(
      `https://graph.facebook.com/v15.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}?access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}&fields=media{caption,media_url,timestamp,permalink}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: InstagramResponse) => setAllPosts(data.media.data))
      .catch((error) =>
        console.error(
          "An error occurred while fetching Instagram images:",
          error
        )
      );
  }, []);
  const posts = allPosts.slice(0, 3);
  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{`${post.caption.slice(0, 50)}...`}</p>
          <p>{dayjs(post.timestamp).format("YYYY/MM/DD")}</p>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
            {post.permalink}
          </a>
          <img
            key={index}
            src={post.media_url ? post.media_url : ""}
            alt=""
            width={200}
          />
        </div>
      ))}
    </>
  );
}
