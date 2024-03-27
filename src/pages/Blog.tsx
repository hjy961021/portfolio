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
                <Link to="https://hongjiyoung.tistory.com/38" target="_blank">
                  [React] fetch
                </Link>
              </h3>
              <span className="listTime">2023.10.17</span>
            </div>
            <span className="listText">fetch, fetch요청(request)</span>
          </li>
          <li className="list">
            <div className="titleArea">
              <h3 className="listTitle">
                <Link to="https://hongjiyoung.tistory.com/37" target="_blank">
                  [React] Data 활용
                </Link>
              </h3>
              <span className="listTime">2023.10.17</span>
            </div>
            <span className="listText">상수 데이터, Mock Data, fetch</span>
          </li>
          <li className="list">
            <div className="titleArea">
              <h3 className="listTitle">
                <Link to="https://hongjiyoung.tistory.com/36" target="_blank">
                  [React] useEffect
                </Link>
              </h3>
              <span className="listTime">2023.10.16</span>
            </div>
            <span className="listText">
              Side Efect, Side Effect 문제점, useEffect
            </span>
          </li>
          <li className="list">
            <div className="titleArea">
              <h3 className="listTitle">
                <Link to="https://hongjiyoung.tistory.com/26" target="_blank">
                  [React] REACT란?
                </Link>
              </h3>
              <span className="listTime">2023.10.06</span>
            </div>
            <span className="listText">react, react 특징, jsx 문법</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
