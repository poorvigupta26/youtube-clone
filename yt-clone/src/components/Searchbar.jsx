import React from 'react'
import search_icon from '../assets/search.png'
import yt_icon from '../assets/yt.png'
import styles from './Searchbar.module.css'

function Searchbar() {
  return (
    <div className={styles.root}>
        <input type="text" name="search" placeholder='Search' id="" />
        <img src={search_icon} alt="" /> 
    </div>
  )
}

export default Searchbar