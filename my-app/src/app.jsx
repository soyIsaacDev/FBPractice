import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import FBPost from './FBPost';
import Comentarios from './Components/Comentariosss';
import AddComment from './Components/AddComment';

const rootElement = document.getElementById("root");
const element = <FBPost/>
ReactDOM.render(element, rootElement);

 /* ReactDOM.render(<FBPost />, document.getElementById('root')); */


 export default function App() {
    const [comments, setComments] = useState([]);

    function writeComment (comentarios) {
        setComments(comentariosAnt => [...comentariosAnt, comentarios]);
    }

    return(
        <div className="App">
            <FBPost ></FBPost>
            {/* <Comentario comentario = {comments}/> */}
            <Comentarios comments = {comments}></Comentarios>
            <AddComment writeComment = {writeComment} ></AddComment>
        </div>
    )
    
 }