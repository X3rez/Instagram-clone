import React,{useRef} from 'react';
import './post.css'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function Post ({userImg, userName, postImg, caption, likes, time, account}){
    const comments = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault()
        let userComment = e.target[0];
        if (userComment.value) {
            comments.current.innerHTML += `
            <p class="post__caption">
                <span class="post__user-name--margin">${account}</span>
                ${userComment.value}
            </p>`

            userComment.value = null;
        }       
    }

    return(
        <article className="post">
            <section className="post__container-img-name">
                <img className="post__user-img" src={userImg} alt="profile" />
                <h2 className="post__user-name" >{userName}</h2>
            </section>    

            <img className="post__post-img" src={postImg} alt="post"/>
                
            <section className="post__icons">
                <div  className="post__icons-one">
                    <FavoriteBorderOutlinedIcon />
                    <ChatBubbleOutlineIcon />
                    <SendOutlinedIcon />
                </div>

                <BookmarkBorderIcon />
            </section>

            <p className="post__likes">{likes} Me Gusta</p>

            <p className="post__caption">
                <span className="post__user-name--margin">{userName}</span>
                {caption}
            </p>

            <section className="post__comment-section" ref={comments} ></section>

            <p  className="post__time">HACE {time}</p>

            <form onSubmit={handleSubmit} className="post__input">
                <input type="text"  className="post__input-comment" placeholder="Añade un comentario..."/>
                <input type="submit" value="Publicar" className="post__input-button"/>
            </form>
            
        </article>
    )
}
export default Post;
