import React from 'react'
import Searchbar from './Searchbar'
import SignUp from './SignUp'
import styles from './Navbar.module.css'
import Icon from './Icon'


function Navbar() {
  return (
    <div className={styles.root}>
        <Icon/>
        <Searchbar />
        <SignUp/>
    </div>
  )
}

export default Navbar