import React, { Component } from 'react';
import './AgentSkillComponent.css';
import Title from '../TitleComponent/TitleComponent';
import agentSkillAssignmentImage from '../../Assets/Resources/agent_skill_assignment.jpg';
import agentSkillList from '../../Assets/Resources/agent_list.jpg';

export default class AgentSkillComponent extends Component {
    render() {

        const { modalImageClick } = this.props;

        return (
            <div className="agent_skill">
                <div className="agent_skill--title txt-center">
                    <Title fontSize="22px">
                        Agent Skill
                    </Title>
                </div>
                <div className="agent_skill--content">
                    <div className="agent_skill__skill__assignment" id="skillAssignment">
                        <div class="agent_skill__skill__assignment--image output-img ">
                            <img src={agentSkillAssignmentImage} alt="" className="output-img" onClick={() => modalImageClick(agentSkillAssignmentImage)} />
                        </div>
                        <div className="agent_skill__skill__assignment--breadcrumbs">
                            <span>NAVIGATION: SETUP > SKILL ASSIGNMENT</span>
                        </div>
                        <div className="agent_skill__skill__assignment--content">
                            <ol type="a">
                                <li>Add Skill Assignment</li>
                                <ul >
                                    <li>1.	Click ADD NEW BUTTON to create a skill assignment</li>
                                    <li>2.	Supply code and skill</li>
                                    <li>3.	Select employee(s) to assign skill</li>
                                    <li>4.	Click SUBMIT BUTTON to save the newly created skill assignment</li>
                                </ul>


                                <li className="marginTop20">Update an  Existing Skill Assignment</li>
                                <ul>
                                    <li> 1.	Locate the agent skill to be updated (Use the search field if needed)</li>
                                    <li>2.	Under the ACTION column of the selected skill assignment, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the skill assignment and click UPDATE</li>
                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the skill assignment, select INACTIVE and click SUBMIT</Title></div>
                                <div><Title fontSize="12px" fontColor="#FF0000">Note: A used skill assignment is not editable</Title></div>

                                <li className="marginTop20">Add Agents to Existing Skill Assignment</li>
                                <ul>
                                    <li>   1.	Locate the skill assignment</li>
                                    <li>2.	Under the ACTION column of the selected skill assignment, click the arrow of the DROPDOWN BUTTON and select ADD AGENT</li>
                                    <li>3.	Select the UNASSIGNED TAB and check all agents to add</li>
                                    <li>4.	Click SUBMIT BUTTON to save the newly added agents</li>
                                </ul>

                                <li className="marginTop20">Remove Agents to Existing Skill Assignment</li>
                                <ul>
                                    <li>        1.	Locate the skill assignment</li>
                                    <li> 2.	Under the ACTION column of the selected skill assignment, click the arrow of the DROPDOWN BUTTON and select REMOVE AGENT</li>
                                    <li> 3.	check all agents to REMOVE</li>
                                    <li> 4.	Click SUBMIT BUTTON to remove agents from the skill assignment</li>
                                </ul>

                            </ol>
                        </div>
                    </div>
                </div>

                <div className="agent_skill--content">
                    <div className="agent_skill__list__of__agents" id="listofAgents">
                        <div class="agent_skill__skill__assignment--image output-img ">
                            <img src={agentSkillList} alt="" className="output-img" onClick={() => modalImageClick(agentSkillList)} />
                        </div>
                        <div class="agent_skill__list__of__agents--breadcrumbs">
                            <span>NAVIGATION: AGENT > LIST OF AGENTS</span>
                        </div>
                        <div className="agent_skill__list__of__agents--content">
                            <ol type="a">
                                <li>Add Agent Skill</li>
                                <ul >
                                    <li>1.	Locate the agent (Use search field if needed)</li>
                                    <li>2.	Click VIEW</li>
                                    <li>
                                        3.	The following information will be displayed:
                                        <ol style={{ listStyle: 'none' }}>
                                            <li>a.	Employee Information</li>
                                            <li>b.	Performance</li>
                                            <li>c.	Infraction</li>
                                            <li>d.	Fatal Error</li>
                                        </ol>
                                    </li>
                                </ul>
                            </ol>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

