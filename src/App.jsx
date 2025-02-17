import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import Navbar from '../components/Navbar'


function App() {
  
  const count = useSelector((state)=>state.counter.value)

  return (
    <>
    <Navbar/>
      <div>
        {count}
      </div>
    </>
  )
}

export default App
