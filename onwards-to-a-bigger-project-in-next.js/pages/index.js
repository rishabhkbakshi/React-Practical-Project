import MeetupList from '../components/meetups/MeetupList';
import dbConn from './api/db-con';

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

// Static site generation (SSG)
export async function getStaticProps() {
  // fetch data from an API

  const client = await dbConn();

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, // update regularly after deployment (in very 10 sec)
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
