import React from 'react'
import classes from './BookingMain.module.css'
import Modal from '../Commons/Modal';
import Button from '../Commons/Button'
import Seat from './Seat'

const BookingMain = (props) => {

    const movieInfo = (
      <div className={classes.header}>{props.name}</div>
    );

    const seatInfo = (
        <div className={classes.seatInfoBox}>
            <div className={classes.seats}>
                <div className={classes.seatState}>
                    <p>N/A</p>
                    <p>Selected</p>
                    <p>Unoccupied</p>
                </div>
                <div className={classes.seatBlock}>
                    <li className={classes.na}></li>
                    <li className={classes.selected}></li>
                    <li className={classes.unoccupied}></li>
                </div>
            </div>
            <div className={classes.screen}>SCREEN</div>
        </div>
    );

    const seats = (
        <Seat cost={props.cost}/>
    );

  const modalButton = (
    <div className={classes.buttons}>
      <Button content={'Order'}></Button>
      <Button onClick={props.onClose} content={'Close'}></Button>
    </div>
  );

  const bookingModalContent = (
    <>
      {/* 영화 정보 */}
      {movieInfo}
      {/* 좌석 + 스크린 정보 */}
      {seatInfo}
      {seats}
      {/* 예매 버튼 */}
      {modalButton}
    </>
  )

  return <Modal>{bookingModalContent}</Modal>;
}

export default BookingMain

