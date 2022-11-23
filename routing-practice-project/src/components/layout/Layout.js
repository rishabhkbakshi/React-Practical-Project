import { Fragment } from 'react'
import classess from './Layout.module.css'
import MainNaviagation from './MainNaviagation'

const Layout = props => {
  return (
    <Fragment>
      <MainNaviagation></MainNaviagation>
      <main className={classess.main}>{props.children}</main>
    </Fragment>
  )
}

export default Layout
