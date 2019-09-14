import React from 'react';
import './ModalImageComponent.css';


const ModalImageComponent = ({ modalImg, modalImageClose }) => {

    return (
        <div className="modal__image__component" >
            <div className="container"  >
                <div className="row">
                    <div className="modal__image__component--container" >
                        <img src={modalImg} alt="" onClick={(e) => { e.stopPropagation() }} />
                    </div>

                    <span className="close__text" onClick={() => modalImageClose()} >
                        close
                    </span>
                </div>
            </div>
        </div >
    )

}

export default ModalImageComponent;