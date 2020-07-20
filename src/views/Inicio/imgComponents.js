import React from 'react';

function ImgComp({src}) {
    let imgStyle={
        width:"auto",
        height:100+"%",
    }
    return <img src={src} alt="slide-img" style={imgStyle}></img>
}

export default ImgComp;