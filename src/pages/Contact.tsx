import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="page contact">
      <div className="contactArea">
        <h2 className="title">Contact</h2>
        <div className="textArea">
          <span className="text">contact text</span>
          <ul className="listArea">
            <li className="list">
              <Link to="/" className="btn">
                GIT
              </Link>
            </li>
            <li className="list">
              <Link to="/" className="btn">
                BLOG
              </Link>
            </li>
            <li className="list">
              <span className="btn">EMAIL</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
