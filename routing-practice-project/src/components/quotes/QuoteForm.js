import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [userInput, setUserInput] = useState({
    enteredAuthor: '',
    enteredText: '',
  });

  const [errorDisableStatus, setErrorDisableStatus] = useState({
    error: {
      authorField: false,
      textField: false,
    },
  });

  const onAuthorChangeHandler = () => {
    if (authorInputRef.current.value !== '') {
      setErrorDisableStatus({
        error: {
          authorField: false,
          textField: textInputRef.current.value === '' ? true : false,
        },
      });
    } else {
      setErrorDisableStatus({
        error: {
          authorField: true,
          textField: textInputRef.current.value === '' ? true : false,
        },
      });
    }
    setUserInput((prevState) => {
      return { ...prevState, enteredAuthor: authorInputRef.current.value };
    });
  };

  const onTextChangeHandler = () => {
    if (textInputRef.current.value !== '') {
      setErrorDisableStatus({
        error: {
          authorField: authorInputRef.current.value === '' ? true : false,
          textField: false,
        },
      });
    } else {
      setErrorDisableStatus({
        error: {
          textField: true,
          authorField: textInputRef.current.value === '' ? true : false,
        },
      });
    }
    setUserInput((prevState) => {
      return { ...prevState, enteredText: textInputRef.current.value };
    });
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (enteredAuthor === '' && enteredText === '') {
      setErrorDisableStatus({
        error: { authorField: true, textField: true },
      });
    }

    if (enteredAuthor !== '' && enteredText !== '') {
      props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to Leave? All your entered data will be lost!'
        }
      ></Prompt>
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={userInput.enteredAuthor}
              ref={authorInputRef}
              onChange={onAuthorChangeHandler}
            />
            {errorDisableStatus.error.authorField && (
              <p className={classes.error}>Author field can't be blank</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              rows="5"
              value={userInput.enteredText}
              ref={textInputRef}
              onChange={onTextChangeHandler}
            ></textarea>{' '}
            {errorDisableStatus.error.textField && (
              <p className={classes.error}>Text field can't be blank</p>
            )}
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
