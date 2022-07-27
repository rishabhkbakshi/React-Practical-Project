import styles from './Card.module.css'

const Card = props => {
  return <div className={`${styles['div-font']} ${props.className}`}>{props.children}</div>
}
export default Card
