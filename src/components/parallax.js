import React from 'react';

//"img/screwsdowelwasher.jpg"

export default function Parallax(props) {
  const { img } = props;
  return (
    <div className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">
          <div className="row center">
            <h5 className="header col s12 light"></h5>
          </div>
        </div>
      </div>
      <div className="parallax"><img src={img} alt="" /></div>
    </div>
  );
}
