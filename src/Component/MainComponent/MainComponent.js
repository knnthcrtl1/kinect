import React, { Suspense, lazy, Component } from 'react';
import './MainComponent.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HashLink as AnchorLink } from 'react-router-hash-link';
import Title from '../TitleComponent/TitleComponent';

const defaultOutputComponent = lazy(() => import('../DefaultOutputComponent/DefaultOutputComponent'));
const setupCommponent = lazy(() => import('../SetupComponent/SetupComponent'));
const agentSkillComponent = lazy(() => import('../AgentSkillComponent/AgentSkillComponent'));
const scoreCardComponent = lazy(() => import('../ScoreCardComponent/ScoreCardComponent'));
const coachingLogsComponent = lazy(() => import('../CoachingLogsComponent/CoachingLogsComponent'));
const kinectAcademy = lazy(() => import('../KinectAcademy/KinectAcademy'));
const reportsComponent = lazy(() => import('../ReportsComponent/ReportsComponent'))

export default class MainComponent extends Component {
    render() {
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
                                                    <li>Average Report</li>
                                                    <li>Infraction Report</li>
                                                    <li>Fatal Error Report</li>
                                                    <li>Evaluation Report</li>
                                                    <li>Master list</li>
                                                </ol>
                                            </li>
                                            <li>10. User Access</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="output__component">
                                    <Suspense fallback={<div style={{ width: '100%', textAlign: 'center' }}>Loading...</div>}>
                                        <Switch>
                                            <Route exact path="/" component={defaultOutputComponent} />
                                            <Route path="/skills" component={setupCommponent} />
                                            <Route path="/agent-skill" component={agentSkillComponent} />
                                            <Route path="/score-card" component={scoreCardComponent} />
                                            <Route path="/coaching-logs" component={coachingLogsComponent} />
                                            <Route path="/kinect-academy" component={kinectAcademy} />
                                            <Route path="/reports" component={reportsComponent} />
                                        </Switch>
                                    </Suspense>
                                </div >
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
