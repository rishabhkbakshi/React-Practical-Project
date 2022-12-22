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

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

// Static site generation (SSG)
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // update regularly after deployment (in very 10 sec)
  };
}

// server side rendering (SSR)
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
