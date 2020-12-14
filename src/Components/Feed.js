import React from 'react';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';

const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {/* {
                postsData.map(entry => {
                    <Post profilePic={entry.avatar} message={entry.text} timestamp={entry.timestamp} imgName={entry.imgName} userName={entry.user} />
                })
            } */}
    </div>
  );
};

export default Feed;
