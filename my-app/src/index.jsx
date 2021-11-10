import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';


const rootElement = document.getElementById("root");
const element = <App/>
ReactDOM.render(element, rootElement);

 /* ReactDOM.render(<FBPost />, document.getElementById('root')); */
