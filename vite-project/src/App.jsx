import React from 'react'
import Nav from "./components/Nav"
import Colour from "./components/Colour"
import Footer from "./components/Footer"
import './App.css'
import data from '../../data'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create'
import 'regenerator-runtime/runtime';
import axios from 'axios';

function App() {
  const baseURL = "http://localhost:1212/colours";
  const [isUk, setIsUk] = React.useState(true)
  const [allData, setAllData] = React.useState(data)

  React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        console.log(response.data)
        setAllData(response.data)
      }
      ).catch(console.log)
    }, [])

  const colours = allData.map(colour => {
    return (
      <Colour 
        key={colour.id}
        {...colour}
      />
    )
  })

  function changeLocation() {
    setIsUk(prevLocation => !prevLocation)
  }
  
  return (
    <Router>
      <Nav
        isUk={isUk}
      />
        <div className='colours-container'>
          <Switch>
            <Route exact path="/">
              {colours}
            </Route>
            <Route exact path="/create">
              <Create
                isUk={isUk}
              />
            </Route>
          </Switch>
        </div>
      <Footer
        isUk={isUk}
        onClick={changeLocation}
      />
    </Router>
  )
}

export default App
