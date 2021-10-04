/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Button.css';

export default props => {
    let classes = 'button';
    classes += props.operantion ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';

    return (
        <button className={classes}
        onClick={e => props.click && props.click(props.label)}
        >
        {props.label} 
        </button>
    )
}



//${props.tripe ? 'triple' : ''}  Se a operacao passada for o triple 



