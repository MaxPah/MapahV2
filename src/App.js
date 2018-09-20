import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer.jsx";
import Content from "./components/Content/Content.jsx";
import CustomHeader from "./components/CustomHeader/CustomHeader.jsx";

class App extends Component {
  render() {
    return (
        <div>
            <div className={'parallax'} />
            <div className={'sticky'} >
                <CustomHeader />
            </div>
            <Content/>
            <Footer />
        </div>
    );
  }
}

export default App;
