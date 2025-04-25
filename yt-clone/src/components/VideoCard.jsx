import React from 'react'
import thumbnail from '../assets/img-thumbnail.jpeg'
import styles from './VideoCard.module.css'
import user from '../assets/channel-icon.png'

function VideoCard({img_ad, title, channel, views, timing}) {
  return (
    <div className={styles.root}>
        <img src={img_ad} alt="" />
        <div className={styles.desc}>
            <p> {title} | {channel}</p>
        </div>
        <div className={styles.src}>
            <img src={user} alt="" />
            <p> {channel}</p>
            <p> {views} </p>
            <p> {timing} ago</p>
        </div>
    </div>
  )
}

export default VideoCard