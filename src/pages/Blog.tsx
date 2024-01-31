import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="page blog">
      <div className="blogArea">
        <h2 className="title">Blog</h2>
        <ul className="listArea">
          <li className="list">
            <div className="titleArea">
              <h3 className="listTitle">
                <Link to="javascript:;">[React] 링크 제목</Link>
              </h3>
              <span className="listTime">2023.01.31</span>
            </div>
            <span className="listText">짧은 설명</span>
          </li>
          <li className="list">
            <div className="titleArea">
              <h3 className="listTitle">
                <Link to="javascript:;">[React] 링크 제목</Link>
              </h3>
              <span className="listTime">2023.01.31</span>
            </div>
            <span className="listText">짧은 설명</span>
          </li>
          <li className="list">
            <div className="titleArea">
              <h3 className="listTitle">
                <Link to="javascript:;">[React] 링크 제목</Link>
              </h3>
              <span className="listTime">2023.01.31</span>
            </div>
            <span className="listText">짧은 설명</span>
          </li>
          <li className="list">
            <div className="titleArea">
              <h3 className="listTitle">
                <Link to="javascript:;">[React] 링크 제목</Link>
              </h3>
              <span className="listTime">2023.01.31</span>
            </div>
            <span className="listText">짧은 설명</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
