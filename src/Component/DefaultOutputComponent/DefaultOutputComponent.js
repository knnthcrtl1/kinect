import React, { Component } from 'react';
import './DefaultOutputComponent.css'
import Title from '../TitleComponent/TitleComponent';
import quequeImg from '../../Assets/Resources/queque.png';

export default class DefaultOutputComponent extends Component {
    render() {
        return (
            <div className="default__output__component">
                <div className="default__output__component--title txt-center">
                    <Title fontSize="28px">
                        Welcome to Core Modules User Guide
                            </Title>
                </div>
                <div className="default__output__component--img--queque">
                    <img src={quequeImg} alt="" />
                </div>
                <div className="default__output__component--sub--title">
                    Try clicking on side menu to find what you re looking for.
                </div>
            </div >
        )
    }
}
