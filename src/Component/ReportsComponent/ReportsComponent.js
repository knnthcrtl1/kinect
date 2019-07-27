import React, { Component } from 'react';
import './ReportsComponent.css';
import Title from '../TitleComponent/TitleComponent';

export default class ReportsComponent extends Component {
    render() {
        return (
            <div className="reports__component">
                <div className="reports__component--title txt-center">
                    <Title fontSize="22px">
                        Average Report
                    </Title>
                </div>
                <div className="reports__component--content">
                    <div className="reports__component">
                        <div class="reports__component--breadcrumbs">
                            <span>NAVIGATION: SETUP > REPORT</span>
                        </div>
                        <div className="reports__component--content">
                            <ol type="a">
                                <li>Average Report</li>
                                <li className="marginTop20">Infraction Report</li>
                                <li className="marginTop20">Fatal Error Report</li>
                                <li className="marginTop20">Evaluation Report</li>
                                <li className="marginTop20">Master List</li>
                            </ol>
                        </div>
                    </div >
                </div >

            </div >
        )
    }
}

