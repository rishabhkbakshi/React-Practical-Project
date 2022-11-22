import { Redirect, Route, Switch } from 'react-router-dom'
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import Welcome from './pages/Welcome'

function App () {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        {/* change the order of router in this case for your desire output */}
        {/* <Switch>
          <Route path='/welcome'>
            <Welcome></Welcome>
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail></ProductDetail>
          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
        </Switch> */}
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'></Redirect>
          </Route>
          <Route path='/welcome'>
            <Welcome></Welcome>
          </Route>
          <Route path='/products' exact>
            <Products></Products>
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail></ProductDetail>
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
