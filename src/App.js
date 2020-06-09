import { render } from 'react-dom'
import React from 'react'
import './App.css'
import Profiles from './components/Profiles'




export default function App() {

  return (
    <div className="">
      <Profiles />

    </div>)
}

render(<App />, document.getElementById('root'))
