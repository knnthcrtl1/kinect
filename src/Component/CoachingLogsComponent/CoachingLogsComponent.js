import React, { Component } from 'react';
import './CoachingLogsComponent.css';
import Title from '../TitleComponent/TitleComponent';

export default class CoachingLogsComponent extends Component {
    render() {
        return (
            <div className="coaching__logs">

                <div className="coaching__logs--title txt-center">
                    <Title fontSize="22px">
                        Scorecard
                    </Title>
                </div>

                <div className="coaching__logs--content">
                    <div className="coaching__logs">
                        <div class="coaching__logs--breadcrumbs">
                            <span>NAVIGATION: SETUP > COACHING LOGS</span>
                        </div>
                        <div className="coaching__logs--content">
                            <ol type="a" style={{ padding: 0 }}>
                                <ul >
                                    <li>1.	Finalize scorecard (Refer to SCORECARD)</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: The initial status of the coaching log is PENDING</Title></div>

                                <ul className="marginTop20">
                                    <li>2.	Add Agent Notes by clicking the dropdown of  the ACTION column and select AGENT NOTES</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: The status of the coaching log is changed to CREATED</Title></div>

                                <ul className="marginTop20">
                                    <li>3.	Supply area of focus and Agent’s commitment</li>
                                    <li>4.	Click SUBMIT BUTTON.</li>
                                    <li>5.	Confirm the coaching log by clicking the dropdown of the ACTION column and select CONFIRM</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: The status of the coaching log is changed to CONFIRMED</Title></div>

                                <ul className="marginTop20">
                                    <li>6.	To update existing coaching log, click the dropdown of the ACTION and select EDIT. Supply edited values of the coaching log and click SUBMIT.</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: Editing finalized coaching log is not allowed</Title></div>
                            </ol>
                        </div>
                    </div >
                </div >

            </div >
        )
    }
}

