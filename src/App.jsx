
import { useState } from 'react'
import './App.css'
import data from '../data/data.json'
import TabButtons from './components/TabButtons'
import TabContent from './components/TabContent'


function App() {

 const selections = data.selections

 const [active, setActive] = useState(0)
   
  return(
    <>
    <div className="main__container">
       <h1>Choose your pet</h1>
 
       <TabButtons tabData={selections} active={active} setActive={setActive}/>
       <TabContent tabData={selections} active={active}/>
     </div>
       
     </>
  )
}

export default App
