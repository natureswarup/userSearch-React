import React from 'react';

import User from './user'

const UserList = (props) => {


    return (
        <div className="container">
            <div className="row text-center">
                
                    {
                    props.filteredUsers.map((user)=>{
                        const {login, id, avatar_url} = user;
                        return (

                            <User login={login} id={id} img={avatar_url} />
                        )
                    })}
            </div>
        </div>
    )
}

export default UserList;