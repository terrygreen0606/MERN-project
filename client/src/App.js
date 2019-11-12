import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import store from './store'
import {loadUser} from './actions/auth_actions'

import StyleOptions from './components/StyleOptions/styleoptions'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Homepage from './components/Homepage/homepage'
import Footer from './components/Footer/footer'
import Copyright from './components/Copyright/copyright'
import MainContainer from './components/MainContainer/MainContainer'
import SignModal from './components/Auth/SignModal/signmodal'
import LogModal from './components/Auth/LogModal/logmodal'

import './App.css';


export class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <StyleOptions />
          <div className='body-inner'>            
            <Header />
            <Home />
            <Route path='/' exact><Homepage /></Route>
            <MainContainer />
            <Footer />
            <Copyright />
            <SignModal />
            <LogModal />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
