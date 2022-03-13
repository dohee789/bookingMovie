import React, { useState } from 'react'
import './Seat.css'
import Total from './Total'

const Seat = (props) => {
    const [count, setCount] = useState(0);

    const listClickHandler = (event) => {
        console.log(event.target.className);
        if(event.target.className === 'na'){
            alert("선택할 수 없는 좌석입니다.");
        }else if(event.target.className === 'unoccupied'){
            event.target.className = 'selected';
            setCount(count + 1);
        }else if(event.target.className === 'selected'){
            event.target.className = 'unoccupied';
            setCount(count - 1);
        }
    }

  return (
      <div className="seatBox">
        <div className="row">
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="na" onClick={listClickHandler}></li>
            <li className="na" onClick={listClickHandler}></li>
            <li className="na" onClick={listClickHandler}></li>
            <li className="na" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
        </div>
        <div className="row">
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="na" onClick={listClickHandler}></li>
            <li className="na" onClick={listClickHandler}></li>
            <li className="na" onClick={listClickHandler}></li>
            <li className="na" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
        </div>
        <div className="row">
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
        </div>
        <div className="row">
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
        </div>
        <div className="row">
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
        </div>
        <div className="row">
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
            <li className="unoccupied" onClick={listClickHandler}></li>
        </div>
        <Total count={count} cost={props.cost}/>
    </div>
  )
}

export default Seat