import React from 'react';

export default function Footer(props) {
  const { links } = props;
  return (
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Professional Property Services, LLC</h5>
            <p className="grey-text text-lighten-4">
              We are locally owned and operated and provide high quality
              and reliable property maintenance services to the island of Hawai'i.
            </p>
          </div>
          {/*<div className="col l3 s12">
            <h5 className="white-text">Settings</h5>
            <ul>
              <li><a className="white-text" href="#!">Link 1</a></li>
              <li><a className="white-text" href="#!">Link 2</a></li>
              <li><a className="white-text" href="#!">Link 3</a></li>
              <li><a className="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Connect</h5>
            <ul>
              <li><a className="white-text" href="#!">Link 1</a></li>
              <li><a className="white-text" href="#!">Link 2</a></li>
              <li><a className="white-text" href="#!">Link 3</a></li>
              <li><a className="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>*/}
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        Made by <span className="brown-text text-lighten-3">Okstory</span>
        </div>
      </div>
    </footer>
  );
}
