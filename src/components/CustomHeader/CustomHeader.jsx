import React from 'react'
import './CustomHeader.css'

const CustomHeader = () => {
    return(
        <div className={'block-header'}>
            <header>
                <div className={'block-header__part', 'float-left'}>
                    <div className={'block-header__part--title'}>
                        <span>Maxime PAHUD</span>
                    </div>
                </div>
                <div className={'block-header__part', 'float-right'}>
                    <ul>
                        <li><a className="active" href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
};

export default CustomHeader;