import { useEffect, useRef, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const [errorDisableStatus, setErrorDisableStatus] = useState({
    error: false,
    disable: true,
  });

  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;
    sendRequest({
      commentData: {
        text: enteredText,
      },
      quoteId: props.quoteId,
    });
    commentTextRef.current.value = '';
  };

  const onChangeHandler = () => {
    if (commentTextRef.current.value !== '') {
      setErrorDisableStatus({
        error: false,
        disable: false,
      });
    } else {
      setErrorDisableStatus({
        error: true,
        disable: true,
      });
    }
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows="5"
          ref={commentTextRef}
          onChange={onChangeHandler}
        ></textarea>
        {errorDisableStatus.error && (
          <p className={classes.error}>Comment field can't be blank</p>
        )}
      </div>
      <div className={classes.actions}>
        <button className="btn" disabled={errorDisableStatus.disable}>
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
