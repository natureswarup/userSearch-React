import React from 'react';

import './user.css';

const User = (props) => {
    return (
        <div className="col-sm-4">
        <div key={props.id} className='userContainer'>

        <img src={props.img} alt="User Image" />    
        <p>{props.login}</p>
        
        </div>
        </div>
    )
}

export default User