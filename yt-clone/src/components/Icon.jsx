import React from 'react'
import yt from '../assets/yt.png'
import styles from './Icon.module.css'


function Icon() {
  return (
    <div className={styles.root}>
        <img src={yt} alt="" />
        <p> YouTube</p>
    </div>
  )
}

export default Icon