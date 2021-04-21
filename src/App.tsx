import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { RoutesContainer } from './components/RoutesContainer/RoutesContainer'

export const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <RoutesContainer/>
      <footer>
        
      </footer>
    </>
  )
}
