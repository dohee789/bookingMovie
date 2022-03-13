import React, { useContext} from 'react'
import Modal from '../Commons/Modal'
import MyItem from "./MyItem";
import classes from './My.module.css'
import Button from '../Commons/Button'
import MyContext from '../../store/MyContext';

const My = (props) => {

  const cartContext = useContext(MyContext);

  const myItems = (
    <ul className={classes['my-items']}>
      {cartContext.items.map((movie) => (
        <MyItem
          key={movie.id}
          image={movie.image}
          name={movie.name}
          age={movie.age}  
          date={movie.date}
          runningtime={movie.runningtime}
          seat={movie.seat}
        />
      ))}
    </ul>
  );

  const modalButton = (
    <div className={classes.buttons}>
      <Button onClick={props.onClose}>닫기</Button>
    </div>
  );

  const myModalContent = (
    <>
      {/* 예매영화정보(myItems) */}
      {myItems}
      {/* 닫기 버튼(modalButton) */}
      {modalButton}
    </>
  );

  return <Modal onClose={props.onClose}>{myModalContent}</Modal>;
}

export default My