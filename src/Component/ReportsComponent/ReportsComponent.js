import React, { Component } from 'react';
import './ReportsComponent.css';
import Title from '../TitleComponent/TitleComponent';
import aveReportImg from '../../Assets/Resources/average_report.jpg';
import infraReportImg from '../../Assets/Resources/infraction_report.jpg';
import fatalErrorImg from '../../Assets/Resources/fatal_error.jpg';
import qaEvalImg from '../../Assets/Resources/qa_evaluation.jpg';
import masterListImg from '../../Assets/Resources/master_list.jpg';

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
                        <div class="reports__component--breadcrumbs">
                            <span>NAVIGATION: SETUP > REPORT</span>
                        </div>
                        <div className="reports__component--content">
                            <ol type="a">
                                <div class="output-img ">
                                    <img src={aveReportImg} alt="" className="output-img" onClick={() => modalImageClick(aveReportImg)} />
                                </div>
                                <li>
                                    Average Report
                                </li>
                                <div class="output-img ">
                                    <img src={infraReportImg} alt="" className="output-img" onClick={() => modalImageClick(infraReportImg)} />
                                </div>
                                <li className="marginTop20">Infraction Report</li>
                                <div class="output-img ">
                                    <img src={fatalErrorImg} alt="" className="output-img" onClick={() => modalImageClick(fatalErrorImg)} />
                                </div>
                                <li className="marginTop20">Fatal Error Report</li>
                                <div class="output-img ">
                                    <img src={qaEvalImg} alt="" className="output-img" onClick={() => modalImageClick(qaEvalImg)} />
                                </div>
                                <li className="marginTop20">Evaluation Report</li>
                                <div class="output-img ">
                                    <img src={masterListImg} alt="" className="output-img" onClick={() => modalImageClick(masterListImg)} />
                                </div>
                                <li className="marginTop20">Master List</li>
                            </ol>
                        </div>
                    </div >
                </div >

            </div >
        )
    }
}

