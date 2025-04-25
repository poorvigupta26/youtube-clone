import React from 'react'
import styles from './Filter.module.css'


function Filter() {
  return (
    <div className={styles.root}>
        <button> All </button>
        <button> Coding </button>
        <button> Comedy </button>
        <button> Educational </button>
        <button> Lifestyle </button>
        <button> Skincare</button>
    </div>
  )
}

export default Filter