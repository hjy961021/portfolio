import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="page contact">
      <div className="contactArea">
        <h2 className="title">Contact</h2>
        <div className="textArea">
          <span className="text">
            저는 이전에 소개한 대로 웹 퍼블리셔로서 다양한 경험을 쌓았으며,
            프론트엔드 개발자로서의 역량을 계속 키워가고 있습니다. 앞으로도
            지식을 공유하고 함께 성장하는 과정에서 여러분과 함께하길 기대합니다.
            <br />
            더 궁금한 사항이 있으시거나 협업의 기회가 있으시다면 언제든지 저에게
            연락 주십시오. 제 이메일 주소 [이메일]로 언제든지 연락 가능합니다.
            <br />
            다시 한 번 감사드리며, 더 많은 소통과 협력을 기대합니다. 감사합니다!
          </span>
          <ul className="listArea">
            <li className="list">
              <Link
                to="https://github.com/hjy961021?tab=repositories"
                className="btn"
                target="_blank"
              >
                GIT
              </Link>
            </li>
            <li className="list">
              <Link
                to="https://hongjiyoung.tistory.com/"
                className="btn"
                target="_blank"
              >
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
