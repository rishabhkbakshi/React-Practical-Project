import useCounter from '../hooks/use-counter'

import Card from './Card'

const ForwardCounter = () => {
  let counter = useCounter(1)
  return <Card>{counter}</Card>
}

export default ForwardCounter
