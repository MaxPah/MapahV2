import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer.jsx";
import Content from "./components/Content/Content.jsx";
import CustomHeader from "./components/CustomHeader/CustomHeader.jsx";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faArrowUp);

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
