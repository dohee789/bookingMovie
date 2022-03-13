import React from 'react'
import CartIcon from '../My/CartIcon'
import classes from './HeaderMy.module.css'

const HeaderMy = (props) => {
  return (
    <button className={classes.button} onClick={props.onOpen}>
        <span className={classes.icon}><CartIcon/></span>
        <span>예매내역</span>
    </button>
  )
}

export default HeaderMy