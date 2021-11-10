import React, { useState } from 'react';
import './FBPost.css';
import imagenPost from "./Img/post.jpg";
import userImage from "./Img/UserImg.jpg";



export default function FacebookPost (){
     

    const postContent = "Seria un buen disfraz ja";
    var date = "03 de Noviembre del 2021";
    var userName = "Isaac Borbon";
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
        </div>
    )
 };

 