import React from 'react';
import './Name.css'

const Name = (props) => {
    const { name } = props.char;
    return (
        <div>
            <ul>
                <li className="fw-bold">{name}</li>
            </ul>
        </div>
    );
};

export default Name;