import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  console.log(props)
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Burgas-in-1981-02.jpg/1024px-Burgas-in-1981-02.jpg?20090101205544"
      title="A First Meetup"
      address="Chomu pulia, Jaipur"
      description="This is a first meetup!"
    ></MeetupDetail>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'A First Meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Burgas-in-1981-02.jpg/1024px-Burgas-in-1981-02.jpg?20090101205544',
        address: 'Chomu pulia, Jaipur',
        description: 'This is a first meetup!',
      },
    },
  };
}

export default MeetupDetails;
