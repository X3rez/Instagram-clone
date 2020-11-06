import './styles.css';
import React from 'react';
import {useState} from 'react'

export function UserToFollow ({image,name,type}) {

    const [following, setFollowing] = useState(false)

    const hadleClick = ()=> setFollowing(!following)

    return (
        <article className="profile">
            <div className="profile__info">
                <img src={image} alt='profile - img' className="profile__info__img"/>

                <div className="profile__info__container">
                    <a href='/' className="profile__info__user">{name}</a>
                    <h5 className="profile__info__type" >{type}</h5>
                </div>
            </div>

           <button className="profile__button" onClick={hadleClick}>{following ?"Siguiendo" :"Seguir"}</button>
        </article>
    )
}

function Follow ({myName,myImg,myUserName,children,}){
    return(
            <section className="follows">

                <article className="follows__user-info">
                    <img src={myImg} alt="profile - user" className="follows__user-info__img"/>
                    <h4 className="follows__user-info__user">{myUserName}<br/>
                    <span className="follows__user-info__name">{myName}</span>
                    </h4>
                </article>

                <article className="follows__more">
                    <h4 className="follows__more-title">Sugerencias para ti</h4>
                    <a href='/' className="follows__more__link">Ver todo</a>
                </article>
                {children}
            </section>
    )
}

export default Follow;
