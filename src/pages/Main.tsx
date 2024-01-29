import React from 'react';

const Main = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight - 300;

  const style = ['style1', 'style2', 'style3'];
  const opacity = ['opacity1', 'opacity1', 'opacity1', 'opacity2', 'opacity3'];
  const twinkle = [
    'twinkle1',
    'twinkle1',
    'twinkle1',
    'twinkle2',
    'twinkle2',
    'twinkle3',
    'twinkle4',
  ];

  function getRandomValue(max: number): number {
    return Math.floor(Math.random() * max);
  }

  const stars = Array.from({ length: 150 }).map((_, index) => {
    const _s = getRandomValue(3);
    const _o = getRandomValue(5);
    const _t = getRandomValue(7);
    const x = getRandomValue(windowWidth);
    const y = getRandomValue(windowHeight);

    const className =
      'star ' + style[_s] + ' ' + opacity[_o] + ' ' + twinkle[_t];

    return (
      <span key={index} className={className} style={{ left: x, top: y }} />
    );
  });

  return (
    <div className="page main">
      <div className="mainArea">
        <span className="moonArea">
          <span className="moon" />
        </span>
        <div className="titleArea">
          <h2 className="title">HONG JIYOUNG</h2>
          <span className="subTitle">FRONT-END DEVELOPER PORTFOLIO</span>
        </div>
        <div className="starArea">{stars}</div>
      </div>
    </div>
  );
};

export default Main;
