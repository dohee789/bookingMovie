import React from 'react'
import classes from './MyItem.module.css'

const MyItem = (props) => {

  return (
    <li className={classes['movie']}>
        <div className={classes.info}>
            <h3>{props.name}</h3> 
            <span>{props.age}</span>   
        </div>
        <img src={props.image}></img>         

        <div className={classes.detail}>
            <h3>관람일: {props.date}</h3>   
            <h3>상영시간: {props.runningtime}</h3>   
            <h3>좌석: {props.seat}</h3>
        </div>
    </li>
  )
}

export default MyItem