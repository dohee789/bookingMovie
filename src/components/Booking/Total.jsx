import React from 'react'

const Total = (props) => {
  return (
    <div>티켓 {props.count} 장 x {props.cost}원 = {props.cost * props.count}원</div>
  )
}

export default Total