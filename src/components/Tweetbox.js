import React, { useState } from "react";
import "../styles/Tweetbox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "../firebase/firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Elon Musk",
      username: "elonmusk",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
    });
  };

  return (
    <div className='tweetbox'>
      <form>
        <div className='tweetbox__input'>
          <Avatar src='https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg' />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type='text'
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetbox__imageInput'
          placeholder='Optional: Enter Image URL'
          type='text'
        />
        <Button onClick={sendTweet} className='tweetbox__tweetButton'>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
