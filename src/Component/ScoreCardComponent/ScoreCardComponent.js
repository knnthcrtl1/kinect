import React, { Component } from 'react';
import './ScoreCardComponent.css';
import Title from '../TitleComponent/TitleComponent';
import scoreCardImg from '../../Assets/Resources/score_card.jpg';

export default class ScoreCardComponent extends Component {
    render() {

        const { modalImageClick } = this.props;

        return (
            <div className="score__card">
                <div className="score__card--title txt-center">
                    <Title fontSize="22px">
                        Scorecard
                    </Title>
                </div>
                <div className="score__card--content">
                    <div class="agent_skill__skill__assignment--image output-img ">
                        <img src={scoreCardImg} alt="" className="output-img" onClick={() => modalImageClick(scoreCardImg)} />
                    </div>
                    <div className="score__card">
                        <div class="score__card--breadcrumbs">
                            <span>NAVIGATION: SETUP > SCORECARD</span>
                        </div>
                        <div className="score__card--content">
                            <ol type="a">
                                <li>Add Scorecard</li>
                                <ul >
                                    <li>1.	Click ADD NEW BUTTON to create a scorecard </li>
                                    <li>2.	Select agent and corresponding agent skill (Skill must be assigned to an agent to display the list of skills, Refer to SKILL ASSGINMENT)</li>
                                    <li>3.	Select monitoring type</li>
                                    <li>4.	Select date of scorecard</li>
                                    <li>5.	Supply call history data if required</li>
                                    <li>6.	Supply application management data if required</li>
                                    <li>7.	Select MET, NOT MET or N/A for each criteria</li>
                                    <li>8.	Add notes for each criteria as needed</li>
                                    <li>9.	Supply call summary, areas of strength and agent notes as needed</li>
                                    <li>10.	Click SAVE AND RETURN TO LIST or SAVE AND RETURN TO ANOTHER</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: The initial status of the newly created scorecard is FOR REVIEW</Title></div>

                                <li className="marginTop20">Update an Existing Scorecard</li>
                                <ul>
                                    <li>1.	Locate the agent’s scorecard to be edited</li>
                                    <li>2.	Under the ACTION column of the selected agent’s scorecard, click the arrow of the DROPDOWN BUTTON and select  EDIT</li>
                                    <li>3.	Supply the edited values of the scorecard</li>
                                    <li>4.	Click SUBMIT BUTTON to save the newly updated scorecard</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: Finalized scorecard is not editable</Title></div>

                                <li className="marginTop20">Delete and Existing Scorecard</li>
                                <ul>
                                    <li>1.	Locate the agent’s scorecard to be deleted</li>
                                    <li>2.	Under the ACTION column of the selected agent’s scorecard, click the arrow of the DROPDOWN BUTTON and select  DELETE</li>
                                    <li>3.	Click PROCEED to permanently delete the scorecard</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: Deleting finalized scorecard is not allowed</Title></div>

                                <li className="marginTop20">d.	Finalize Scorecard</li>
                                <ul>
                                    <li>  1.	Locate the agent’s scorecard to be finalized</li>
                                    <li>2.	Under the ACTION column of the selected agent’s scorecard, click the arrow of the DROPDOWN BUTTON and select  FINALIZE</li>
                                    <li>3.	Click PROCEED to finalize the scorecard</li>
                                </ul>

                            </ol>
                        </div>
                    </div >
                </div >

            </div >
        )
    }
}

