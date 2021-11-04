import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import imagenPost from "./Img/post.jpg";
import userImage from "./Img/UserImg.jpg";


const rootElement = document.getElementById("root");

const postContent = "Seria un buen disfraz jaja";
var date = "03 de Noviembre del 2021";
var userName = "Isaac Borbon";

export default function FBPost (){
    return(      
        <div className = "post-contanier">
            <div className = "userBar" >
                <div className = "userIcon-Container">
                    <img src={userImage} alt="User Avatar" className = "userIcon"/>
                </div>
                <div className = "nameDate-Bar">
                    <div className = "userName"> {userName} </div>
                    <div className = "Date">{date}</div>
                </div>
                <div className = "post-Menu">...</div>
            </div>

            <div className ="post-content-container" >
                <div className = "post-content">{postContent}</div>
            </div>
            

            <div className = "image-container">
                <img src={imagenPost} alt="Imagen Compartida" className = "imagen"/>
                
            </div>
            
            <div className = "barraMeGusta">
                <div className = "meGusta">
                    <span className = "meGustaIcon"></span>
                    <span className = "meGustaSpan" >Me gusta</span>
                </div>
                <div className = "meGusta">
                    <span className = "meGustaIcon"></span>
                    <span className = "meGustaSpan" >Comentar</span>
                </div>
                <div className = "meGusta">
                    <span className = "meGustaIcon"></span>
                    <span className = "meGustaSpan" >Compartir</span>
                </div>
            </div>
            <div className = "Comentarios">
                <div className = "userIcon-comments-container">
                <img className = "userIcon-comments" src={userImage} alt="User Avatar" />
                </div>
                <div className = "comment-input-container">
                    <input className = "comment-input" type="text" name="" id="" placeholder="Escribe un comentario"/>                  
                </div>
            </div>
            <div></div>
        </div>
    )
 };