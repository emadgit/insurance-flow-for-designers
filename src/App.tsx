import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow, { ProductIds } from './buyflow/Buyflow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/buy/insurance_des">
            <Buyflow productId={ProductIds.desIns} />
          </Route>
          <Route path="/">
            <h2>Welcome to Getsafe's Insurance Platform</h2>
            <p>Choose your insurance plan</p>
            <Container>
              <Row className='mb-2'><Link to="/buy/insurance_dev"><Button size='sm' variant="info" style={{width:"210px"}}>🧑‍💻 Insurance for Developers</Button></Link></Row>
              <Row className='mb-2'><Link to="/buy/insurance_des"><Button size='sm' variant="success" style={{width:"210px"}}>🧑‍🎨 Insurance for Designers</Button></Link></Row>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
