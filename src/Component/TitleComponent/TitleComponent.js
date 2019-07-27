import React from 'react';

const TitleComponent = ({ children, fontSize, fontColor, fontWeight }) => {
    return (
        <span className="title__component" style={{ fontSize: fontSize, color: fontColor, fontWeight: fontWeight }}>
            {children}
        </span>
    )
}

export default TitleComponent;