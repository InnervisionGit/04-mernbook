import React from 'react';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';
import Post from './Post.js';

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://upload.wikimedia.org/wikipedia/en/5/55/SHODAN_hires.jpg'
        message='This is the text message'
        timestamp='2000000000000'
        imgName='imgName'
        username='Innervision'
      />
      {/* {
                postsData.map(entry => {
                    <Post profilePic={entry.avatar} message={entry.text} timestamp={entry.timestamp} imgName={entry.imgName} userName={entry.user} />
                })
            } */}
    </div>
  );
};

export default Feed;
