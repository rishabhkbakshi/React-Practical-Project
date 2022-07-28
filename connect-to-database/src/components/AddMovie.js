import React, { useRef, useState } from 'react'

import classes from './AddMovie.module.css'

function AddMovie (props) {
  const titleRef = useRef('')
  const openingTextRef = useRef('')
  const releaseDateRef = useRef('')

  const [errorMsg, setErrorMsg] = useState()

  function submitHandler (event) {
    event.preventDefault()

    const userName = titleRef.current.value
    const openingText = openingTextRef.current.value
    const releaseDate = releaseDateRef.current.value

    if (
      userName.trim() === '' ||
      openingText.trim() === '' ||
      releaseDate.trim() === ''
    ) {
      let fieldsName = ''
      if (userName.trim() === '') {
        fieldsName += 'User Name; '
      }
      if (openingText.trim() === '') {
        fieldsName += 'Opening Text; '
      }
      if (releaseDate.trim() === '') {
        fieldsName += 'Release Date;'
      }
      setErrorMsg(
        <p>
          Fields can't be blank : <b>{fieldsName}</b>
        </p>
      )
      return
    }

    const movie = {
      id: Math.floor(Math.random() * 1000000),
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value
    }

    titleRef.current.value = ''
    openingTextRef.current.value = ''
    releaseDateRef.current.value = ''
    setErrorMsg(null)

    props.onAddMovie(movie)
  }

  return (
    <React.Fragment>
      {errorMsg && <span>{errorMsg}</span>}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='opening-text'>Opening Text</label>
          <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>Release Date</label>
          <input
            type='date'
            id='date'
            min='1960-01-01'
            max='2050-12-01'
            ref={releaseDateRef}
          />
        </div>
        <button>Add Movie</button>
      </form>
    </React.Fragment>
  )
}

export default AddMovie
