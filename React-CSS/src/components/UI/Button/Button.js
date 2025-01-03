// import styledComponents from 'styled-components'
import styles from './Button.module.css'

// this is for styledComponents
// const Button = styledComponents.button`
//   width: 100%
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   @media(min-width: 400px) {
//     width: auto;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `

// This is for CssModule
const Button = props => {
  debugger;
  console.log(props);
  return (
    // using normal css
    // <button type={props.type} className='button' onClick={props.onClick}>

    // using cssModule
    <button
      type={props.type}
      disabled={!props.courseName}
      className={styles.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
