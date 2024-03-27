import React from 'react';
import about from '../assets/images/visual/about.jpg';

const About = () => {
  return (
    <div className="page about">
      <div className="aboutArea">
        <div className="profileArea">
          <img src={about} alt="about" />
        </div>
        <div className="textArea">
          <h2 className="title">About</h2>
          <span className="text">
            안녕하세요. 프론트엔드 개발자 홍지영입니다.
            <br />
            <br />
            저는 4년 2개월 동안 웹 퍼블리셔로 일했습니다. 이 기간 동안에는 주로
            SI 업체에서 금융권 프로젝트에 참여하여 다양한 경험을 쌓았습니다.
            진행한 프로젝트는 모두 성공적으로 정식으로 오픈되었으며, 이 과정에서
            저는 문제를 해결하고 효과적으로 의사소통하며 협업하는 방법을
            배웠습니다.
            <br />
            <br />
            저는 HTML5, CSS3, Vue.js, SCSS를 주로 다루어왔으며, 부족하다고 느낀
            React, JavaScript, TypeScript는 학원과 개인 프로젝트를 통해
            학습했습니다. 이러한 경험을 통해 다양한 기술 스택을 습득하고
            프로젝트에 적용하는 능력을 키웠습니다.
            <br />
            <br />
            여러 프로젝트를 진행하면서 각 파트별로 어떻게 문제를 해결하고
            효과적으로 의사소통하며 협업해야 하는지를 배웠습니다. 앞으로도
            계속해서 성장하고자 합니다. 지금까지의 경험과 지식을 기반으로
            팀원들과 공유하고, 함께 더 많은 것을 배우며 성장하고 싶습니다.
          </span>
          <ul className="tagArea">
            <li className="tag">HTML5</li>
            <li className="tag">CSS3</li>
            <li className="tag">Scss</li>
            <li className="tag">Vue.js</li>
            <li className="tag">React</li>
            <li className="tag">Typescript</li>
            <li className="tag">Javascript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
