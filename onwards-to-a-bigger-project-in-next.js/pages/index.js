import Layout from '../components/layout/Layout';
import MainNavigation from '../components/layout/MainNavigation';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Burgas-in-1981-02.jpg/1024px-Burgas-in-1981-02.jpg?20090101205544',
    address: 'Chomu pulia, Jaipur',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Burgas-in-1981-01.jpg/1200px-Burgas-in-1981-01.jpg?20090101205342',
    address: 'Mansarovar Metro, Jaipur',
    description: 'This is a second meetup!',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
