import React from 'react';


export default function Block(props) {
  const { icon, header } = props;
  return (
    <div className="col s12 m4">
      <div className="icon-block">
        <h2 className="center brown-text"><i className="material-icons">{icon}</i></h2>
        <h5 className="center">{header}</h5>

        <p className="light"></p>
      </div>
    </div>
  );
}
