import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './Component/HeaderComponent/HeaderComponent';
import MainComponent from './Component/MainComponent/MainComponent';

import ScrollToTopComponent from './Component/ScrollToTopComponent/ScrollToTopComponent';


let header = document.getElementById("root");
let sticky = header.offsetTop;

export default class App extends Component {

  state = {
    showScroller: false
  }

  myFunction = () => {
    if (window.pageYOffset > sticky) {
      this.setState({
        showScroller: true
      })
    } else {
      this.setState({
        showScroller: false
      })
    }
  }

  render() {

    window.onscroll = () => this.myFunction()

    const { showScroller } = this.state;

    return (
      <div className="app" ref={el => this.appClass = el}>
        <HeaderComponent />
        <MainComponent />

        {(showScroller) ?
          <ScrollToTopComponent />
          : null
        }
      </div >
    )
  }
}