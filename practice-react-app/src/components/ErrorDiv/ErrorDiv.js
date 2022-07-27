// import React, { Fragment } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../UI/Button/Button'
import styles from './ErrorDiv.module.css'

// Practive program of React Portal
const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>
}

const Modal = props => {
  return (
    <div className={styles.modal}>
      <div className='container'>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMsg}</p>
        </div>
        <footer className={styles.actions}>
          <Button
            className='form-control btn btn-sm btn-primary float-left'
            onClick={props.onClick}
          >
            OK
          </Button>
        </footer>
      </div>
    </div>
  )
}

const ErrorDiv = props => {
  return (
    <React.Fragment>
      {/* <Fragment> */}
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClickHandler}></Backdrop>,
        document.getElementById('overlay-root'),
        'overlay'
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          errorMsg={props.errorMsg}
          onClick={props.onClickHandler}
        ></Modal>,
        document.getElementById('modal-root'),
        'modal'
      )}
      {/* </Fragment> */}
    </React.Fragment>
  )
}
export default ErrorDiv
