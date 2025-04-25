import React from 'react'
import VideoCard from './VideoCard'
import styles from './Feed.module.css'

function Feed() {
  return (
    <div className={styles.root}>
      <VideoCard img_ad={"https://i.ytimg.com/vi/CYZw0xplPfA/maxresdefault.jpg"} title={"Bas Kar Bassi"} channel={"Anubhav Singh Bassi"} views={"45M"} timing={"9 months"}/>
      <VideoCard img_ad={"https://i.ytimg.com/vi/ERCMXc8x7mc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6FnxWoj1ZG0iFMx76gYG-qXVCsg"} title={"Learn How to Code"} channel={"Apna College"} views={"450K"} timing={"2 months"}/>
      <VideoCard img_ad={"https://marketplace.canva.com/EAFSv6o6beQ/2/0/1600w/canva-red-bold-finance-youtube-thumbnail-vGSnQGShz3c.jpg"} title={"Learn how to trade for beginners"} channel={"Trading Company"} views={"200K"} timing={"4 months"}/>
    </div>
  )
}

export default Feed