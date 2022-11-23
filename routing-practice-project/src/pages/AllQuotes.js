import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Rishabh',
    text: 'Learning React is fun!'
  },
  {
    id: 'q2',
    author: 'Vicky',
    text: 'Learning React is Great!'
  },
  {
    id: 'q3',
    author: 'Ram Prakash',
    text: 'Learning React is Awesome!'
  }
]

const AllQuote = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
}

export default AllQuote
