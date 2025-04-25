import React from 'react'
import signin from '../assets/signin.png'
import styles from './SignUp.module.css'
import { Link, Links } from 'react-router-dom'
import VideoPlay from './pages/VideoPlay'

function SignUp() {
  return (
    <div className={styles.root}>
        <img src={signin} alt="" />
    </div>
  )
}

export default SignUp