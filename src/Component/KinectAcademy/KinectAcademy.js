import React, { Component } from 'react';
import './KinectAcademy.css';
import Title from '../TitleComponent/TitleComponent';
import kinectAcademyImg from '../../Assets/Resources/kinect_academy.jpg';

export default class KinectAcademy extends Component {
    render() {

        const { modalImageClick } = this.props;

        return (
            <div className="kinect__academy">
                <div className="kinect__academy--title txt-center">
                    <Title fontSize="22px">
                        KINECT ACADEMY
                    </Title>
                </div>
                <div className="kinect__academy--content">
                    <div class="agent_skill__skill__assignment--image output-img ">
                        <img src={kinectAcademyImg} alt="" className="output-img" onClick={() => modalImageClick(kinectAcademyImg)} />
                    </div>
                    <div className="kinect__academy">
                        <div class="kinect__academy--breadcrumbs">
                            <span>NAVIGATION: SETUP > KINECT ACADEMY</span>
                        </div>
                        <div className="kinect__academy--content">
                            <ol type="a">
                                <li>Add KINECT ACADEMY material</li>
                                <ul >
                                    <li>1.	Click ADD NEW BUTTON to create a KINECT ACADEMY material</li>
                                    <li>2.	Supply name and keyword (Separate each keyword with a comma)</li>
                                    <li>3.	Upload the KINECT ACADEMY material file</li>
                                    <li>4.	Click SUBMIT BUTTON to save the newly KINECT ACADEMY material</li>
                                </ul>

                                <li className="marginTop20">b.	Update an Existing KINECT ACADEMY material</li>
                                <ul>
                                    <li>    1.	Locate the KINECT ACADEMY material to be updated (Use the search field if needed)</li>
                                    <li> 2.	Under the ACTION column of the selected KINECT ACADEMY material, click the arrow of the DROPDOWN BUTTON and select EDIT</li>
                                    <li>3.	Supply the edited values of the KINECT ACADEMY material and click UPDATE</li>

                                </ul>

                                <div><Title fontSize="12px" fontColor="#FF0000">Note: To deactivate the status of the KINECT ACADEMY material, select INACTIVE and click SUBMIT</Title></div>
                                <div><Title fontSize="12px" fontColor="#FF0000">Note: KINECT ACADEMY material Uploads are viewable and downloadable in E PORTAL</Title></div>

                            </ol>
                        </div>
                    </div >
                </div >

            </div >
        )
    }
}

