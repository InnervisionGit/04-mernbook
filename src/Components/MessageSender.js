import { Avatar, Input } from '@material-ui/core';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React, { useState } from 'react';
import './MessageSender.css';

const MessageSender = () => {
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleSubmit = () => {
    console.log('submiting..');
  };
  return (
    <div className='messageSender'>
      <div className='messageSender-top'>
        <Avatar src='https://upload.wikimedia.org/wikipedia/en/5/55/SHODAN_hires.jpg' />
        <form>
          <input
            type='text'
            className='messageSender-input'
            placeholder='Write a comment..'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type='file'
            className='messageSender-fileSelector'
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className='messageSender-bottom'>
        <div className='messageSender-option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender-option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender-option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};
export default MessageSender;
