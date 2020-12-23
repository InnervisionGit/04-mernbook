import React from 'react';
import Story from './Story';
import './StoryReel.css';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
        image='https://image-cdn.essentiallysports.com/wp-content/uploads/20200622002638/tsm-1-1.png'
        profileSrc='https://pbs.twimg.com/profile_images/1323011790662475776/g9VFfJe3_400x400.jpg'
        title='TSM'
      />
      <Story
        image='https://esportbet.com/wp-content/uploads/2019/04/G2-esports.jpg'
        profileSrc='https://i.pinimg.com/originals/52/04/27/5204272acf38e9f8b9d2e8b405b13bc6.jpg'
        title='G2 - Esports'
      />
      <Story
        image='https://i.dailymail.co.uk/i/pix/2017/11/02/17/45F29EA600000578-5043929-image-a-17_1509644845604.jpg'
        profileSrc='https://pbs.twimg.com/profile_images/1278181740322816000/91FRdAyW.jpg'
        title='T1'
      />
    </div>
  );
};

export default StoryReel;
