// import logo from './logo.svg';

import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/Ordersummary';
import { NoMatch } from './components/Nomatch';
import { Product } from './Product';
import { FeaturedProducts } from './components/Featuredproduct';
import './App.css';
import { NewProduct } from './components/Newproduct';
import {Users} from './components/User'
import { UserDetails } from './components/UserDetails';
import {Admin} from './components/Admin'
import {Profile} from './components/Profile'
import { AuthProvider } from './utils/Auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
const LazyAbout = React.lazy(() => import('./components/About'))



function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path ='/' element = {<Home/>} /> 

        <Route 
        path ='about' 
        element = {
          <React.Suspense fallback='loading...'>
            <LazyAbout/>
          </React.Suspense>
        }
        />

        <Route path ='order-summary' element = {<OrderSummary/>} />
        <Route path = 'products' element = {<Product/>}>
          <Route index element = {<FeaturedProducts/>}/>
          <Route path = 'featured' element = {<FeaturedProducts/>}/>
          <Route path = 'new' element = {<NewProduct/>}/>
        </Route>
        <Route path = 'users' element = {<Users/>}>
          <Route path = ':userId' element = {<UserDetails/>}/>
          <Route path = 'admin' element={<Admin/>} />
        </Route>
        <Route path = 'profile' element = {<RequireAuth><Profile/></RequireAuth>} />
        <Route path = 'login' element = {<Login/>} />
        <Route path = '*' element = {<NoMatch/>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
