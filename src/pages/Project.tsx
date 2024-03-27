import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolio from '../assets/images/visual/portfolio.png';
import mysterysketch from '../assets/images/visual/mysterysketch.png';
import itcat from '../assets/images/visual/itcat.png';
import dobby from '../assets/images/visual/dobby.jpg';

const Project = () => {
  return (
    <div className="page project">
      <div className="projectArea">
        <h2 className="title">Project</h2>
        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          speed={600}
        >
          <SwiperSlide>
            <div className="projectGroup">
              <div className="imgArea">
                <img src={portfolio} alt="portfolio" />
              </div>
              <div className="projectBox">
                <div className="titleArea">
                  <h3 className="projectTitle">프로젝트 이름</h3>
                  <span className="title">포트폴리오</span>
                  <Link
                    to="https://github.com/hjy961021/portfolio"
                    className="link"
                    target="_blank"
                  >
                    https://github.com/hjy961021/portfolio
                  </Link>
                </div>
                <div className="textArea">
                  <h3 className="projectText">프로젝트 설명</h3>
                  <span className="text">프론트엔드 포트폴리오 제작</span>
                </div>
                <ul className="tagArea">
                  <li className="tag">HTML5</li>
                  <li className="tag">Sass</li>
                  <li className="tag">React</li>
                  <li className="tag">Typescript</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectGroup">
              <div className="imgArea">
                <img src={mysterysketch} alt="mysterysketch" />
              </div>
              <div className="projectBox">
                <div className="titleArea">
                  <h3 className="projectTitle">프로젝트 이름</h3>
                  <span className="title">MYSTERY SKETCH</span>
                  <Link
                    to="https://github.com/hjy961021/mystery-sketch"
                    className="link"
                    target="_blank"
                  >
                    https://github.com/hjy961021/mystery-sketch
                  </Link>
                </div>
                <div className="textArea">
                  <h3 className="projectText">프로젝트 설명</h3>
                  <span className="text">
                    웹 캐치마인드는 그림을 그리고 정답을 맞추는 멀티플레이어 웹
                    게임으로, 5명의 팀원이 협력하여 개발하였습니다. 이 게임은
                    사용자가 캔버스에 그림을 그리고 다른 사용자들이 이를
                    추측하여 정답을 맞추는 형식으로 진행됩니다.
                  </span>
                </div>
                <ul className="tagArea">
                  <li className="tag">HTML5</li>
                  <li className="tag">Sass</li>
                  <li className="tag">React</li>
                  <li className="tag">Typescript</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectGroup">
              <div className="imgArea">
                <img src={itcat} alt="itcat" />
              </div>
              <div className="projectBox">
                <div className="titleArea">
                  <h3 className="projectTitle">프로젝트 이름</h3>
                  <span className="title">ITcat</span>
                  <Link
                    to="https://github.com/hjy961021/ITcat-frontend"
                    className="link"
                    target="_blank"
                  >
                    https://github.com/hjy961021/ITcat-frontend
                  </Link>
                </div>
                <div className="textArea">
                  <h3 className="projectText">프로젝트 설명</h3>
                  <span className="text">
                    이 프로젝트는 사용자들이 소극장 공연을 온라인으로 예매할 수
                    있는 티켓팅 시스템을 구축하는 것을 목표로 하였습니다.
                    사용자는 상품 정보를 확인하고 원하는 날짜와 시간에 티켓을
                    예매할 수 있으며, 관리자는 상품의 추가, 수정, 삭제 등을
                    관리할 수 있는 관리자 페이지를 운영합니다.
                  </span>
                </div>
                <ul className="tagArea">
                  <li className="tag">HTML5</li>
                  <li className="tag">Sass</li>
                  <li className="tag">React</li>
                  <li className="tag">Javascript</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectGroup">
              <div className="imgArea">
                <img src={dobby} alt="dobby" />
              </div>
              <div className="projectBox">
                <div className="titleArea">
                  <h3 className="projectTitle">프로젝트 이름</h3>
                  <span className="title">DOBBY</span>
                  <Link
                    to="https://github.com/hjy961021/Dobby-frontend"
                    className="link"
                    target="_blank"
                  >
                    https://github.com/hjy961021/Dobby-frontend
                  </Link>
                </div>
                <div className="textArea">
                  <h3 className="projectText">프로젝트 설명</h3>
                  <span className="text">
                    이 프로젝트는 사용자들이 다양한 DIY(Do It Yourself) 제품을
                    구독하고 자신만의 인생 취미를 발견할 수 있는 서비스를
                    개발하는 것을 목표로 하였습니다. 사용자는 원하는 DIY 제품을
                    장바구니에 담아 구매할 수 있으며, 결제를 통해 구독을 신청할
                    수 있습니다.
                  </span>
                </div>
                <ul className="tagArea">
                  <li className="tag">HTML5</li>
                  <li className="tag">Sass</li>
                  <li className="tag">React</li>
                  <li className="tag">Javascript</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
