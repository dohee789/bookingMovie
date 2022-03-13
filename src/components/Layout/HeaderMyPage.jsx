import React from 'react'
import classes from './HeaderMyPage.module.css'


const HeaderMyPage = (props) => {
  return (
    <button className={classes.button} onClick={props.onOpen}>
     <img className={classes.movieIcon} src="https://www.sunquilt.com/m/image/main/bottom_icon04.png" alt="" />
    </button>
  )
}

export default HeaderMyPage