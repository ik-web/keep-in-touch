import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from '../App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = (state) => {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App state={state}/>
      </HashRouter>
    </React.StrictMode>
  );
};

export default render;
