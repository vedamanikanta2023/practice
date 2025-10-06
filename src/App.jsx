import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserDetails } from './UserDetails'
import { Sample } from './Sample'

function App() {
  return (
    <>
      <UserDetails />   
      <Sample /> 
    </>
  )
}

export default App
