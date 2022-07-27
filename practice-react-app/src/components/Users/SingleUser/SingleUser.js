const SingleUser = props => {
  return (
    <div className='row'>
      <div className='col-sm-4'>{props.id}</div>
      <div className='col-sm-4'>{props.username}</div>
      <div className='col-sm-4'>{props.age}</div>
    </div>
  )
}
export default SingleUser
