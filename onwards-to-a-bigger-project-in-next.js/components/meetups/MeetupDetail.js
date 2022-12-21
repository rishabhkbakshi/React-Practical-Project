import { Fragment } from 'react';
import classes from './MeetupDetail.module.css';

function MeetupDetail(params) {
  return (
    <section className={classes.detail}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Burgas-in-1981-01.jpg/1200px-Burgas-in-1981-01.jpg?20090101205342"
        alt="A First Meetup"
      ></img>
      <h1>A First Meetup</h1>
      <address>Chomu pulia, Jaipur</address>
      <p>The meetup description</p>
    </section>
  );
}

export default MeetupDetail;
