import React from 'react';
import Block from './block';

export default function Section(props) {
  const { descriptors } = props;
  return (
    <div className="container">
      <div className="section">


        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-icons">trending_up</i></h2>
              <h5 className="center">Professional Quality</h5>

              <p className="light"></p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-icons">group</i></h2>
              <h5 className="center">Customer Focused</h5>

              <p className="light"></p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-icons">build</i></h2>
              <h5 className="center">Range of Services</h5>
              <p className="light">

              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
