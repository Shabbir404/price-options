import './App.css'
import DaisyNav from './components/deisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import Nav from './components/NavBar/Nav'
import PriceOptions from './components/Price-Options/PriceOptions'

function App() {


  return (
    <>
      <div>
        <Nav></Nav>
        {/* <DaisyNav></DaisyNav> */}
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
      </div>


    </>
  )
}

export default App
