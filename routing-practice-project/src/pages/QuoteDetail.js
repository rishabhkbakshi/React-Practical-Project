import { Fragment } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Rishabh',
    text: 'Learning React is fun!',
  },
  {
    id: 'q2',
    author: 'Vicky',
    text: 'Learning React is Great!',
  },
  {
    id: 'q3',
    author: 'Ram Prakash',
    text: 'Learning React is Awesome!',
  },
];

const QuoteDetail = () => {
  const match = useRouteMatch();

  const quoteParams = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteParams.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
