import React from 'react'
import classes from './Total.module.css'

const Total = (props) => {
  return (
    <div className={classes.total}>티켓 {props.count} 장 x {props.cost}원 = {props.cost * props.count}원</div>
  )
}

export default Total