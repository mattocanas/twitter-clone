import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import db from "../firebase/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <Tweetbox />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
      <Post
        displayName='Elon Musk'
        username='elonmusk'
        verified={true}
        text='first tweet!'
        avatar='https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
        image=''
      />
    </div>
  );
}

export default Feed;
