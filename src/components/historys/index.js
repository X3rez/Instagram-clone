import React from 'react';
import './history.css'

export function History ({imageProfile,userName}){
    return (
        <div className="history">
            <img className="history__img" src={imageProfile} alt="history"/>
            <h2 className="history__user" >{userName.length > 10 ? userName.slice(0,10) + '...': userName}</h2>
        </div>
    )
}

function AllHistorys (pross){
    return (
        <div className="history-container">
            {pross.children}        
        </div>
    )
}


export default AllHistorys;