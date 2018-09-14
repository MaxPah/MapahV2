import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer />
        </div>
    );
  }
}

export default App;
