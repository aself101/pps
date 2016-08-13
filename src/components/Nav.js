import React, { Component } from 'react';


export default function Nav(props) {
  const { links } = props;
  return (
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo">PPS</a>
      </div>
    </nav>
  );
}
