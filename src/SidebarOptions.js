import React from 'react';
import './SidebarOption.css';

function SidebarOptions({option = "test",Icon}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="option__icon" ></Icon>}
            {Icon ? <h4>{option}</h4>: <p>{option}</p>}
        </div>
    )
}

export default SidebarOptions
