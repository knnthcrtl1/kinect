import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './Component/HeaderComponent/HeaderComponent';
import MainComponent from './Component/MainComponent/MainComponent';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderComponent />
        <MainComponent />
      </div>
    )
  }
}