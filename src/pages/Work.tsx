import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import skttworld from '../assets/images/logo/skttworld.png';
import hyundaicard from '../assets/images/logo/hyundaicard.png';
import shinhansec from '../assets/images/logo/shinhansec.png';
import nonghyupcard from '../assets/images/logo/nonghyupcard.png';
import shinhancard from '../assets/images/logo/shinhancard.png';
import kfriends from '../assets/images/logo/kfriends.png';
import kbcard from '../assets/images/logo/kbcard.png';
import zoonafund from '../assets/images/logo/zoonafund.jpg';

const Work = () => {
  return (
    <div className="page work">
      <div className="workArea">
        <h2 className="title">Work</h2>
        <Swiper slidesPerView={1} modules={[Navigation]} navigation speed={600}>
          <SwiperSlide>
            <div className="listArea">
              <h3 className="listTitle">Skt Tworld 웹 & 앱 고도화</h3>
              <div className="listGroup">
                <div className="imgArea">
                  <img src={skttworld} className="sm" alt="skt Tworld" />
                </div>
                <div className="textArea">
                  <span className="listText">
                    SKT Tworld의 웹 및 앱을 고도화하여 사용자 경험을 향상시키는
                    퍼블리싱 작업을 수행하였습니다. 새로운 디자인과 기능을
                    추가하여 사용자들이 서비스를 더욱 편리하게 이용할 수 있도록
                    지원했습니다.
                  </span>
                  <ul className="tagArea">
                    <li className="tag">React</li>
                    <li className="tag">Sass</li>
                    <li className="tag">Typescript</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="listArea">
              <h3 className="listTitle">디지털패키지 프로젝트 2022</h3>
              <div className="listGroup">
                <div className="imgArea">
                  <img src={hyundaicard} alt="hyundaicard" />
                </div>
                <div className="textArea">
                  <span className="listText">
                    현대카드의 이벤트 등록 페이지를 퍼블리싱하여 사용자들이 쉽게
                    이벤트를 등록하고 참여할 수 있는 환경을 제공했습니다.
                    직관적인 디자인과 원활한 기능을 통해 사용자들의 이벤트 등록
                    프로세스를 간편하게 만들었습니다.
                  </span>
                  <ul className="tagArea">
                    <li className="tag">Vue.js</li>
                    <li className="tag">Sass</li>
                    <li className="tag">Javascript</li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="listArea">
              <h3 className="listTitle">신한투자증권 마이데이터 서비스</h3>
              <div className="listGroup">
                <div className="imgArea">
                  <img src={shinhansec} alt="shinhansec" />
                </div>
                <div className="textArea">
                  <span className="listText">
                    신한투자증권의 마이데이터 페이지를 퍼블리싱하여 고객들이
                    개인 금융 데이터를 효과적으로 관리하고 분석할 수 있는 환경을
                    제공했습니다. 직관적인 인터페이스와 사용자 친화적인 디자인을
                    통해 고객들의 금융 관리를 돕는 서비스를 구현했습니다.
                  </span>
                  <ul className="tagArea">
                    <li className="tag">Vue.js</li>
                    <li className="tag">Sass</li>
                    <li className="tag">Javascript</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="listArea">
              <h3 className="listTitle">
                기업카드 디지털시스템 분리 구축 UI/UX 부문
              </h3>
              <div className="listGroup">
                <div className="imgArea">
                  <img src={nonghyupcard} alt="nonghyupcard" />
                </div>
                <div className="textArea">
                  <span className="listText">
                    농협카드의 PC 및 모바일 웹을 퍼블리싱하여 사용자들이
                    어디서나 편리하게 카드 서비스를 이용할 수 있는 환경을
                    제공했습니다. 반응형 디자인과 사용자 친화적인 인터페이스로
                    최적화된 웹페이지를 제공하여 고객들의 이용 편의성을
                    극대화했습니다.
                  </span>
                  <ul className="tagArea">
                    <li className="tag">HTML5</li>
                    <li className="tag">CSS3</li>
                    <li className="tag">Javascript</li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="listArea">
              <h3 className="listTitle">신한카드 PayFAN 리부트 프로젝트</h3>
              <div className="listGroup">
                <div className="imgArea">
                  <img src={shinhancard} alt="shinhancard" />
                </div>
                <div className="textArea">
                  <span className="listText">
                    신한카드의 PayFAN 서비스를 리부트하여 퍼블리싱하여 고객들이
                    보다 편리하고 직관적으로 카드 혜택을 확인하고 이용할 수 있는
                    환경을 제공했습니다. 새로운 디자인과 기능을 추가하여
                    사용자들의 경험을 향상시켰습니다.
                  </span>
                  <ul className="tagArea">
                    <li className="tag">Vue.js</li>
                    <li className="tag">Sass</li>
                    <li className="tag">Typescript</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="listArea">
              <h3 className="listTitle">K-friends 홈페이지 운영</h3>
              <div className="listGroup">
                <div className="imgArea">
                  <img src={kfriends} className="sm" alt="kfriends" />
                </div>
                <div className="textArea">
                  <span className="listText">
                    K-friends 홈페이지 운영 프로젝트는 사용자들에게 다양한
                    정보와 서비스를 제공하는데 중점을 둔 웹사이트를 운영하고
                    관리하는 작업입니다. 콘텐츠 업데이트, 기술적 유지보수,
                    사용자 피드백에 대한 대응 등을 통해 웹사이트의 원할한 운영을
                    유지합니다.
                  </span>
                  <ul className="tagArea">
                    <li className="tag">HTML5</li>
                    <li className="tag">CSS3</li>
                    <li className="tag">JQuery</li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="listArea">
              <h3 className="listTitle">KB국민카드 통합인증관리 시스템 구축</h3>
              <div className="listGroup">
                <div className="imgArea">
                  <img src={kbcard} alt="kbcard" />
                </div>
                <div className="textArea">
                  <span className="listText">
                    국민카드의 로그인 및 회원가입 페이지를 퍼블리싱하여
                    사용자들이 손쉽게 가입하고 로그인할 수 있는 직관적이고
                    사용자 친화적인 환경을 제공했습니다. 최신 기술과 보안 기준을
                    준수하여 안전한 서비스를 제공하고자 노력했습니다.
                  </span>
                  <ul className="tagArea">
                    <li className="tag">HTML5</li>
                    <li className="tag">CSS3</li>
                    <li className="tag">JQuery</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="listArea">
              <h3 className="listTitle">신한카드 홈페이지 통합 재구축</h3>
              <div className="listGroup">
                <div className="imgArea">
                  <img src={shinhancard} alt="shinhancard" />
                </div>
                <div className="textArea">
                  <span className="listText">
                    신한카드의 홈페이지를 재구축하여 사용자들에게 더 편리하고
                    직관적인 경험을 제공하였습니다. 새로운 디자인과 기능을
                    추가하여 고객들의 서비스 이용을 원활하게 돕고, 보다 효율적인
                    정보 제공을 실현했습니다.
                  </span>
                  <ul className="tagArea">
                    <li className="tag">HTML5</li>
                    <li className="tag">CSS3</li>
                    <li className="tag">JQuery</li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="listArea">
              <h3 className="listTitle">주나펀드 홈페이지, 맵 구축</h3>
              <div className="listGroup">
                <div className="imgArea">
                  <img src={zoonafund} className="sm" alt="zoonafund" />
                </div>
                <div className="textArea">
                  <span className="listText">
                    주나펀드의 홈페이지를 구축하고 지도 기능을 추가하여
                    사용자들이 편리하게 펀드 정보를 검색하고 확인할 수 있는
                    환경을 제공했습니다. 사용자들에게 쉽고 빠르게 원하는 정보를
                    제공하여 투자 결정을 돕는 서비스를 제공하였습니다.
                  </span>
                  <ul className="tagArea">
                    <li className="tag">HTML5</li>
                    <li className="tag">CSS3</li>
                    <li className="tag">JQuery</li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Work;
