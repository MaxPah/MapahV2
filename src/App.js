import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import CustomHeader from "./components/CustomHeader/CustomHeader";

class App extends Component {
  render() {
    return (
        <div>
            <CustomHeader/>
            <Content/>
            <Footer />
        </div>
    );
  }
}

export default App;
