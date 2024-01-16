import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/" className="link">
          HONG JIYOUNG
        </Link>
      </h1>
      <ul className="nav">
        <li>
          <Link
            to="https://github.com/hjy961021?tab=repositories"
            target="_blank"
            className="link"
          >
            GIT
          </Link>
        </li>
        <li>
          <Link
            to="https://hongjiyoung.tistory.com/"
            target="_blank"
            className="link"
          >
            BLOG
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
