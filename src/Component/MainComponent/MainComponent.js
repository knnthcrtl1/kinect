import React, { Suspense, lazy, Component } from 'react';
import './MainComponent.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HashLink as AnchorLink } from 'react-router-hash-link';
import Title from '../TitleComponent/TitleComponent';

import ModalImageComponent from '../ModalImageComponent/ModalImageComponent';


const DefaultOutputComponent = lazy(() => import('../DefaultOutputComponent/DefaultOutputComponent'));
const SetupCommponent = lazy(() => import('../SetupComponent/SetupComponent'));
const AgentSkillComponent = lazy(() => import('../AgentSkillComponent/AgentSkillComponent'));
const ScoreCardComponent = lazy(() => import('../ScoreCardComponent/ScoreCardComponent'));
const CoachingLogsComponent = lazy(() => import('../CoachingLogsComponent/CoachingLogsComponent'));
const KinectAcademy = lazy(() => import('../KinectAcademy/KinectAcademy'));
const ReportsComponent = lazy(() => import('../ReportsComponent/ReportsComponent'))



export default class MainComponent extends Component {

    state = {
        modalImg: null,
        modalComponent: false
    }

    modalImageClick = (agentSkillImage) => {

        this.setState({
            modalImg: agentSkillImage,
            modalComponent: true
        })

    }

    modalImageClose = (test) => {

        console.log(test);

        this.setState({
            modalComponent: false
        })

    }

    render() {

        const { modalImg, modalComponent } = this.state;

        return (
            <div className="main__component">
                <div className="container">
                    <div className="row">
                        <div className="main__component--content">
                            <Router>
                                <div className="sidebar__component">
                                    <div className="sidebar__component--title" style={{ marginBottom: '20px' }}>
                                        <Title fontSize="22px">
                                            TABLE OF CONTENTS
                    </Title>
                                    </div>
                                    <div className="sidebar__nav__list">
                                        <ul>
                                            <li><Link to="/">1. Introduction</Link></li>
                                            <li>2. Getting Started</li>
                                            <li>3. Main Navigation</li>
                                            <li>
                                                <Link to="/skills">4. Setup</Link>
                                                <ol type="a">
                                                    <li><AnchorLink to="/skills#agentSkill">Agent Skill</AnchorLink></li>
                                                    <li><AnchorLink to="/skills#criteriaClassification">Criteria Classification</AnchorLink></li>
                                                    <li><AnchorLink to="/skills#criteriaName">Criterial Name</AnchorLink></li>
                                                    <li><AnchorLink to="/skills#criteriaAssignment">Criteria Assignment</AnchorLink></li>
                                                    <li><AnchorLink to="/skills#scoreStructure">Score Structure</AnchorLink></li>
                                                    <li><AnchorLink to="/skills#trainingMaterials">Training Materials</AnchorLink></li>
                                                    <li><AnchorLink to="/skills#rolloutBulletin">Roll Out Bulletin</AnchorLink></li>
                                                </ol>
                                            </li>
                                            <li>
                                                <Link to="/agent-skill"> 5. Agent Skill</Link>
                                                <ol type="a">
                                                    <li><AnchorLink to="/agent-skill#skillAssignment">Skill Assignment</AnchorLink></li>
                                                    <li><AnchorLink to="/agent-skill#listofAgents">List of Agents</AnchorLink></li>
                                                </ol>
                                            </li>
                                            <li><Link to="/score-card"> 6. Scorecard</Link></li>
                                            <li><Link to="/coaching-logs"> 7. Coaching Logs</Link></li>
                                            <li><Link to="/kinect-academy">8. Kinect Academy</Link></li>
                                            <li>
                                                <Link to="/reports">9. Reports</Link>
                                                <ol type="a">
                                                    <li>Average Report
                                                        <ul>
                                                            <li><AnchorLink to="/reports#weeklyReport">Weekly</AnchorLink></li>
                                                            <li><AnchorLink to="/reports#monthlyReport">Monthly</AnchorLink></li>
                                                            <li><AnchorLink to="/reports#quarterlyReport">Quarterly/Yearly</AnchorLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><AnchorLink to="/reports#qaEvaluation">QA Evaluation</AnchorLink></li>
                                                    <li><AnchorLink to="/reports#infractionReport">Infraction Report</AnchorLink></li>
                                                    <li><AnchorLink to="/reports#fatalReport">Fatal Error Report</AnchorLink></li>
                                                    <li><AnchorLink to="/reports#evaluationReport">Evaluation Report</AnchorLink></li>
                                                    <li><AnchorLink to="/reports#masterList">Master list</AnchorLink></li>
                                                </ol>
                                            </li>
                                            <li>10. User Access</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="output__component">
                                    <Suspense fallback={<div style={{ width: '100%', textAlign: 'center' }}>Loading...</div>}>
                                        <Switch>
                                            <Route exact path={'/'} component={() => <DefaultOutputComponent />} />
                                            <Route path={'/skills'} component={() => <SetupCommponent modalImageClick={this.modalImageClick} />} />
                                            <Route path={'/agent-skill'} component={() => <AgentSkillComponent modalImageClick={this.modalImageClick} />} />
                                            <Route path={'/score-card'} component={() => <ScoreCardComponent modalImageClick={this.modalImageClick} />} />
                                            <Route path={'/coaching-logs'} component={() => <CoachingLogsComponent modalImageClick={this.modalImageClick} />} />
                                            <Route path={'/kinect-academy'} component={() => <KinectAcademy modalImageClick={this.modalImageClick} />} />
                                            <Route path={'/reports'} component={() => <ReportsComponent modalImageClick={this.modalImageClick} />} />
                                        </Switch>
                                    </Suspense>
                                </div >
                                {(modalComponent) ?
                                    <div className="main__modal--component" onClick={this.modalImageClose}>
                                        <ModalImageComponent
                                            modalImg={(modalImg)}
                                            modalImageClose={this.modalImageClose}
                                        />

                                    </div>
                                    : null
                                }
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
