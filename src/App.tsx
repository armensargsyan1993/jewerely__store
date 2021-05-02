import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { RoutesContainer } from './components/RoutesContainer/RoutesContainer'
import { sizeActions } from './redux/size/sizeActions'

import {ReactComponent as Icon} from './assets/icons/Vector-4.svg'

export const App = () => {
  const dispatch = useDispatch()
  
  const resizeMax = () => {
    if(window.innerWidth < 450){
      dispatch(sizeActions.addBurger())
      window.removeEventListener('resize',resizeMax)
      window.addEventListener('resize',resizeMin)
    }
  }
  
  const resizeMin = () => {
    if(window.innerWidth >= 450){
      dispatch(sizeActions.removeBurger())
      window.removeEventListener('resize',resizeMin)
      window.addEventListener('resize',resizeMax)
    }
  }
useEffect(() => {
  if(window.innerWidth < 450){
    dispatch(sizeActions.addBurger())
    window.addEventListener('resize',resizeMin)
  }else{
    dispatch(sizeActions.removeBurger())
      window.addEventListener('resize',resizeMax)
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  
  return (
    <>
    <Icon className="abcde"/>
      {/* <header>
        <Navbar/>
      </header>
      <RoutesContainer/>
      <footer>
        <Footer/>
      </footer> */}
    </>
  )
}
