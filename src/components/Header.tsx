import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">HONG JIYOUNG</Link>
        </h1>
        <ul>
          <li>
            <Link
              to="https://github.com/hjy961021?tab=repositories"
              target="_blank"
            >
              GIT
            </Link>
          </li>
          <li>
            <Link to="https://hongjiyoung.tistory.com/" target="_blank">
              BLOG
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
