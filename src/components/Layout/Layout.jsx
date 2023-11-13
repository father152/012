import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import './layout.css'



function Layout() {
  return (
    <div className='layout'>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}
export {Layout}