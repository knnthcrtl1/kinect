import React, { Component } from 'react';
import './SetupComponent.css';
import Title from '../TitleComponent/TitleComponent';
import agentSkillImage from '../../Assets/Resources/criteria_name.jpg';
import criteriaClass from '../../Assets/Resources/criter_class.jpg';
import criteriaName from '../../Assets/Resources/criteria_name.jpg';
import criteriaAssign from '../../Assets/Resources/criteria_assignment.jpg';
import scoreStructure from '../../Assets/Resources/score_struucture.jpg';
import trainigMat from '../../Assets/Resources/training_materials.jpg';
import rollOut from '../../Assets/Resources/roll_out.jpg';

export default class SetupComponent extends Component {

    render() {

        const { modalImageClick } = this.props;

        return (
            <div className="setup__component">
                <div className="setup__component--title txt-center">
                    <Title fontSize="22px">
                        Setup
                    </Title>
                </div>
                <div className="setup__component--content">
                    <div className="setup__component__agent__skill" id="agentSkill">
                        <div className="agent_skill__skill__assignment--image">
                            <img src={agentSkillImage} alt="" className="output-img" onClick={() => modalImageClick(agentSkillImage)} />
                        </div>
                        <div className="setup__component__agent__skill--breadcrumbs">
                            <span>NAVIGATION: SETUP > AGENT SKILL</span>
                        </div>
                        <div className="setup__component__agent__skill--content">
                            <ol type="a">
                                <li>Add Agent Skill</li>
                                <ul >
                                    <li>1.	Click ADD NEW BUTTON to create a new agent skill</li>
                                    <li>2.	Supply code and agent skill</li>
                                    <li>3.	Click SUBMIT BUTTON to save the newly created agent skill</li>
                                </ul>


                                <li className="marginTop20">Update an Existing Agent Skill</li>
                                <ul>
                                    <li>1.	Locate the agent skill to be updated (Use the search field if needed)</li>
                                    <li>2.	Under the ACTION column of the selected agent skill, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the agent skill and click UPDATE</li>
                                </ul>

                                <Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the agent skill, select INACTIVE and click SUBMIT</Title>

                                <li className="marginTop20">Delete an Existing Agent Skill</li>
                                <ul>
                                    <li>1.	Locate the agent skill to be deleted (Use the search field if needed)</li>
                                </ul>
                            </ol>
                        </div>
                    </div>

                    <div className="setup__component__criteria__classification" id="criteriaClassification">
                        <div className="agent_skill__skill__assignment--image">
                            <img src={criteriaClass} alt="" className="output-img" onClick={() => modalImageClick(criteriaClass)} />
                        </div>
                        <div className="setup__component__criteria__classification--breadcrumbs">
                            <span>NAVIGATION: SETUP > CRITERIA CLASSIFICATION</span>
                        </div>
                        <div className="setup__component__criteria__classification--content">
                            <ol type="a">
                                <li>Criteria Classification</li>
                                <ul >
                                    <li>1.	Click ADD NEW BUTTON to create a new criteria classification</li>
                                    <li>2.	Supply level and classification</li>
                                    <li>3.	Click SUBMIT BUTTON to save the newly created criteria classification</li>
                                </ul>


                                <li className="marginTop20">Update an Existing Criteria Classification</li>
                                <ul>
                                    <li>1.	Locate the criteria classification to be updated (Use the search field if needed)</li>
                                    <li>2.	Under the ACTION column of the selected criteria classification, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the criteria classification and click UPDATE</li>
                                </ul>

                                <Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the criteria classification, select INACTIVE and click SUBMIT </Title>

                                <li className="marginTop20">Delete an Existing Criteria Classification</li>
                                <ul>
                                    <li>1.	Locate the criteria classification to be deleted (Use the search field if needed)</li>
                                    <li> 2.	Under the ACTION column of the selected criteria classification, click the arrow of the DROPDOWN BUTTON and select DELETE</li>
                                    <li> 3.	Click YES, DELETE BUTTON to permanently delete the selected criteria classification</li>
                                </ul>
                                <Title fontSize="12px" fontColor="#FF0000">Note: Deleting an assigned criteria classification is not allowed</Title>
                            </ol>
                        </div>
                    </div>

                    <div className="setup__component__criteria__name" id="criteriaName">
                        <div className="agent_skill__skill__assignment--image">
                            <img src={criteriaName} alt="" className="output-img" onClick={() => modalImageClick(criteriaName)} />
                        </div>
                        <div className="setup__component__criteria__name--breadcrumbs">
                            <span>NAVIGATION: SETUP > CRITERIA NAME</span>
                        </div>
                        <div className="setup__component__criteria__name--content">
                            <ol type="a">
                                <li>Add Criteria Name</li>
                                <ul >
                                    <li>  1.	Click ADD NEW BUTTON to create a new criteria name</li>
                                    <li>2.	Supply criteria name and click FATAL ERROR if required</li>
                                    <li>  3.	Click SUBMIT BUTTON to save the newly created criteria name</li>
                                </ul>

                                <li className="marginTop20">Update an Existing Criteria Name</li>
                                <ul>
                                    <li>  1.	Locate the criteria name to be updated (Use the search field if needed) </li>
                                    <li> 2.	Under the ACTION column of the selected criteria name, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the criteria name and click UPDATE</li>
                                </ul>

                                <Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the criteria name, select INACTIVE and click SUBMIT</Title>

                                <li className="marginTop20">Delete an Existing Criteria Name</li>
                                <ul>
                                    <li>1.	Locate the criteria name to be deleted (Use the search field if needed)</li>
                                    <li>2.	Under the ACTION column of the selected criteria name, click the arrow of the DROPDOWN BUTTON and select DELETE</li>
                                    <li>3.	Click YES, DELETE BUTTON to permanently delete the selected criteria name</li>
                                </ul>

                                <Title fontSize="12px" fontColor="#FF0000">Note: Deleting an assigned criteria name is not allowed</Title>
                                <ul>
                                    <li> 1.	Locate the score structure to be updated (Use the search field if needed)</li>
                                    <li>2.	Under the ACTION column of the selected score structure, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the score structure and click UPDATE</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the score structure, select INACTIVE and click SUBMIT</Title></div>
                                <div><Title fontSize="12px" fontColor="#FF0000">Note: Updating a used score structure is not allowed</Title></div>

                                <li className="marginTop20">Delete an Existing Score structure</li>
                                <ul>
                                    <li> 1.	Locate the score structure to be deleted (Use the search field if needed)</li>
                                    <li>  2.	Under the ACTION column of the selected score structure, click the arrow of the DROPDOWN BUTTON and select DELETE</li>
                                    <li> 3.	Click YES, DELETE BUTTON to permanently delete the selected score structure</li>

                                </ul>
                                <Title fontSize="12px" fontColor="#FF0000">Note: Deleting a used score structure is not allowed</Title>
                            </ol>
                        </div>
                    </div >

                    <div className="setup__component__criteria__assignment" id="criteriaAssignment">
                        <div className="agent_skill__skill__assignment--image">
                            <img src={criteriaAssign} alt="" className="output-img" onClick={() => modalImageClick(criteriaAssign)} />
                        </div>
                        <div className="setup__component__criteria__assignment--breadcrumbs">
                            <span>NAVIGATION: SETUP > CRITERIA ASSIGNMENT</span>
                        </div>
                        <div className="setup__component__criteria__assignment--content">
                            <ol type="a">
                                <li>Add Criteria Assignment</li>
                                <ul >
                                    <li>1.	Click ADD NEW BUTTON to create a new criteria assignment</li>
                                    <li>2.	Supply code and select agent skill (select FILTERED if agent skill is application management)</li>
                                    <li>
                                        3.	From the classification panel
                                        <ol style={{ listStyle: 'none' }}>
                                            <li>3.1	Select criteria classification and criteria name (indicate level if needed)</li>
                                            <li>3.2	Click the + BUTTON to add another criteria name</li>
                                            <li>3.3	Click the – BUTTON to remove an existing criteria name</li>
                                            <li>3.4	Perform step 3.1 to 3.3 as needed</li>
                                        </ol>
                                    </li>
                                    <li>4.	Click ADD NEW BUTTON if another criteria classification is needed</li>
                                    <li>5.	Perform step 4 as needed</li>
                                    <li>6.	Click SUBMIT BUTTON to save the newly created criteria assignment</li>
                                </ul>
                                <Title fontSize="12px" fontColor="#FF0000">Note: Only 1 active criteria assignment is allowed for each agent skill </Title>

                                <li className="marginTop20">Update an Existing Criteria assignment</li>
                                <ul>
                                    <li>1.	Locate the criteria assignment to be updated (Use the search field if needed)</li>
                                    <li> 2.	Under the ACTION column of the selected criteria assignment, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the criteria assignment and click UPDATE</li>
                                </ul>

                                <Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the agent skill, select INACTIVE and click SUBMIT</Title>

                                <li className="marginTop20">Delete an Existing Criteria assignment</li>
                                <ul>
                                    <li>1.	Locate the criteria assignment to be deleted (Use the search field if needed)</li>
                                    <li>2.	Under the ACTION column of the selected criteria assignment, click the arrow of the DROPDOWN BUTTON and select DELETE</li>
                                    <li>3.	Click YES, DELETE BUTTON to permanently delete the selected criteria assignment</li>
                                </ul>
                                <Title fontSize="12px" fontColor="#FF0000">Note: Deleting an assigned criteria assignment is not allowed</Title>

                                <li className="marginTop20">Copying an existing criteria assignment</li>
                                <ul>
                                    <li>1.	Under the ACTION column, select COPY CRITERIA</li>
                                    <li>2.	Supply the edited values of selected criteria assignment</li>
                                    <li>3.	Click the SUBMIT button to save the newly copied criteria assignment</li>
                                </ul>
                                <Title fontSize="12px" fontColor="#FF0000">Note: Only 1 active criteria assignment is allowed for each agent skill </Title>
                            </ol>
                        </div>
                    </div>

                    <div className="setup__component__score__structure" id="scoreStructure">
                        <div className="agent_skill__skill__assignment--image">
                            <img src={scoreStructure} alt="" className="output-img" onClick={() => modalImageClick(scoreStructure)} />
                        </div>
                        <div className="setup__component__score__structure--breadcrumbs">
                            <span>NAVIGATION: SETUP > SCORE SCTRUCTURE</span>
                        </div>
                        <div className="setup__component__score__structure--content">
                            <ol type="a">
                                <li>Add Score Structure</li>
                                <ul>
                                    <li> 1.	Click ADD NEW BUTTON to create a new score structure</li>
                                    <li> 2.	Supply score structure and check FILTERED if required</li>
                                    <li>3.	Supply score range and count</li>
                                    <li>4.	Click + BUTTON to add another score range and count</li>
                                    <li> 5.	Click – BUTTON to remove score range and count</li>
                                    <li>6.	Repeat step 3 to 5 as needed</li>
                                    <li>7.	Click SUBMIT BUTTON to save the newly created score structure</li>
                                </ul>


                                <li className="marginTop20">Update an Existing Score Structure</li>
                                <ul>
                                    <li>1.	Locate the score structure to be updated (Use the search field if needed)</li>
                                    <li>2.	Under the ACTION column of the selected score structure, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the score structure and click UPDATE</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the score structure, select INACTIVE and click SUBMIT</Title></div>
                                <div><Title fontSize="12px" fontColor="#FF0000">Note: Updating a used score structure is not allowed</Title></div>

                                <li className="marginTop20">Delete an Existing Score Structure</li>
                                <ul>
                                    <li> 1.	Locate the score structure to be deleted (Use the search field if needed)</li>
                                    <li> 2.	Under the ACTION column of the selected score structure, click the arrow of the DROPDOWN BUTTON and select DELETE</li>
                                    <li>3.	Click YES, DELETE BUTTON to permanently delete the selected score structure</li>
                                </ul>
                                <Title fontSize="12px" fontColor="#FF0000">Note: Deleting a used score structure is not allowed</Title>
                            </ol>
                        </div>
                    </div>

                    <div className="setup__component__training__manuals" id="trainingMaterials">
                        <div className="agent_skill__skill__assignment--image">
                            <img src={trainigMat} alt="" className="output-img" onClick={() => modalImageClick(trainigMat)} />
                        </div>
                        <div className="setup__component__training__manuals--breadcrumbs">
                            <span>NAVIGATION: SETUP > TRAINING MANUALS</span>
                        </div>
                        <div className="setup__component__training__manuals--content">
                            <ol type="a">
                                <li>Add Training Manual</li>
                                <ul>
                                    <li> 1.	Click ADD NEW BUTTON to create a training manual</li>
                                    <li>2.	Supply name and keyword (Separate each keyword with a comma)</li>
                                    <li>3.	Upload the training manual file</li>
                                    <li>4.	Click SUBMIT BUTTON to save the newly created training manual</li>
                                </ul>

                                <li className="marginTop20">Update an Existing Training Manual</li>
                                <ul>
                                    <li>1.	Locate the training manual to be updated (Use the search field if needed)</li>
                                    <li>2.	Under the ACTION column of the selected training manual, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the training manual and click UPDATE</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the training manual, select INACTIVE and click SUBMIT</Title></div>
                                <div><Title fontSize="12px" fontColor="#FF0000">Note: Training manuals are viewable and downloadable in E PORTAL</Title></div>
                            </ol>
                        </div>
                    </div>

                    <div className="setup__component__rollout__bulletin" id="rolloutBulletin">
                        <div className="agent_skill__skill__assignment--image">
                            <img src={rollOut} alt="" className="output-img" onClick={() => modalImageClick(rollOut)} />
                        </div>
                        <div className="setup__component__rollout__bulletin--breadcrumbs">
                            <span>NAVIGATION: SETUP > ROLL OUT BULLETIN</span>
                        </div>
                        <div className="setup__component__rollout__bulletin--content">
                            <ol type="a">
                                <li>Add Roll out bulletin</li>
                                <ul>
                                    <li>1.	Click ADD NEW BUTTON to create a roll out bulletin</li>
                                    <li>2.	Supply name and keyword (Separate each keyword with a comma)</li>
                                    <li>3.	Upload the roll out bulletin file</li>
                                    <li>4.	Click SUBMIT BUTTON to save the newly created roll out bulletin</li>
                                </ul>

                                <li className="marginTop20">Update an Existing Roll out bulletin</li>
                                <ul>
                                    <li>1.	Locate the roll out bulletin to be updated (Use the search field if needed)</li>
                                    <li>2.	Under the ACTION column of the selected roll out bulletin, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the roll out bulletin and click UPDATE</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the roll out bulletin, select INACTIVE and click SUBMIT</Title></div>
                                <div><Title fontSize="12px" fontColor="#FF0000">Note: Roll Out Bulletin Uploads are viewable and downloadable in E PORTAL</Title></div>
                            </ol>
                        </div>
                    </div>



                </div >
            </div >
        )
    }
}