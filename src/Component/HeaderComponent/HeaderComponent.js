import React, { Component } from 'react';
import './HeaderComponent.css';
import Title from '../TitleComponent/TitleComponent';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className="header__component">
                <div className="container">
                    <div className="row">
                        <div className="header__component--title txt-center">
                            <Title fontSize="38px" fontWeight="bold" >
                                QA MANAGEMENT AND MONITORING SYSTEM
                            </Title>
                        </div>
                        <div className="header__component--sub--title txt-center">
                            <Title fontSize="30px" >
                                CORE MODULES USER GUIDE VERSION 1.0
                            </Title>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}