import React, { Component } from 'react';
import './ScrollToTopComponent.css';
import scrollTopImg from '../../Assets/Resources/up-arrow.png';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class ScrollToTopComponent extends Component {

    scrollToTop = () => {

        scroll.scrollToTop('', {
            duration: 2000,
        })

    }

    render() {

        return (
            <div className="scroll__component" >
                <span className="scroll__component--content" onClick={this.scrollToTop}>
                    <img src={scrollTopImg} alt="" />
                </span>
            </div>
        )
    }


}

export default ScrollToTopComponent;