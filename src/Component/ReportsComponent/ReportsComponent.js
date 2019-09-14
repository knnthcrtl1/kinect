import React, { Component } from 'react';
import './ReportsComponent.css';
import Title from '../TitleComponent/TitleComponent';
import infraReportImg from '../../Assets/Resources/infraction_report.jpg';
import fatalErrorImg from '../../Assets/Resources/fatal_error.jpg';
import qaEvalImg from '../../Assets/Resources/qa_evaluation.jpg';
import masterListImg from '../../Assets/Resources/master_list.jpg';

import weekylyImage from '../../Assets/Resources/weeklyImage.png';
import monthlyImage from '../../Assets/Resources/monthlyImage.png';
import quaterlyImage from '../../Assets/Resources/quarterlyImage.png';

export default class ReportsComponent extends Component {
    render() {

        const { modalImageClick } = this.props;

        return (
            <div className="reports__component">
                <div className="reports__component--title txt-center">
                    <Title fontSize="22px">
                        Average Report
                    </Title>
                </div>
                <div className="reports__component--content">
                    <div className="reports__component">
                        <div className="reports__component--breadcrumbs">
                            <span>NAVIGATION: SETUP > REPORT</span>
                        </div>
                        <div className="reports__component--content">
                            <ol type="a">
                                <li>
                                    <div>Average Report</div>

                                    <div id="weeklyReport">
                                        <Title fontSize="14px" fontWeight="bold">Weekly Report</Title>
                                        <div className="output-img ">
                                            <img src={weekylyImage} alt="" className="output-img" onClick={() => modalImageClick(infraReportImg)} />
                                        </div>
                                    </div>

                                    <div id="monthlyReport">
                                        <Title fontSize="14px" fontWeight="bold">Monthly Report</Title>
                                        <div className="output-img ">
                                            <img src={monthlyImage} alt="" className="output-img" onClick={() => modalImageClick(infraReportImg)} />
                                        </div>
                                    </div>

                                    <div id="quarterlyReport">
                                        <Title fontSize="14px" fontWeight="bold">Quaterly/Yearly Report</Title>
                                        <div className="output-img ">
                                            <img src={quaterlyImage} alt="" className="output-img" onClick={() => modalImageClick(infraReportImg)} />
                                        </div>
                                    </div>
                                </li>
                                <li className="marginTop20" id="qaEvaluation">QA Evaluation</li>
                                <div className="output-img ">
                                    <img src={qaEvalImg} alt="" className="output-img" onClick={() => modalImageClick(qaEvalImg)} />
                                </div>
                                <li className="marginTop20" id="infractionReport">Infraction Report</li>
                                <div className="output-img ">
                                    <img src={infraReportImg} alt="" className="output-img" onClick={() => modalImageClick(infraReportImg)} />
                                </div>
                                <li className="marginTop20" id="fatalReport">Fatal Error Report</li>
                                <div className="output-img ">
                                    <img src={fatalErrorImg} alt="" className="output-img" onClick={() => modalImageClick(fatalErrorImg)} />
                                </div>

                                <li className="marginTop20" id="masterList">Master List</li>
                                <div className="output-img ">
                                    <img src={masterListImg} alt="" className="output-img" onClick={() => modalImageClick(masterListImg)} />
                                </div>
                            </ol>
                        </div>
                    </div >
                </div >

            </div >
        )
    }
}

