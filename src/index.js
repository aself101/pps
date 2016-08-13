import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Nav from './components/Nav';
import Footer from './components/Footer';

//render(<Nav />, document.getElementById('navbar'));
render(<App />, document.getElementById('app'));
render(<Footer />, document.getElementById('foot'));
