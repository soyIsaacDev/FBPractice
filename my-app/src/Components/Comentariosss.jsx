import React from 'react';
import Comentario from './Comentario';
import "./comentarios.css"

export default function Comentariosss ({comments}){
    var contador = 0;
    if (comments){
        return (
            <div className = "Comentariosss">
                {comments.map(c => <Comentario
                    comentario = {comments[contador]}
                    key = {contador++}
                />)}
            </div>
        )
    }
}   
