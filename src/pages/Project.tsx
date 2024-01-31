import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
                <img src="" alt="" />
              </div>
              <div className="projectBox">
                <div className="titleArea">
                  <h3 className="projectTitle">프로젝트 이름</h3>
                  <span className="title">프로젝트 이름</span>
                  <Link to="/" className="link">
                    레포 링크
                  </Link>
                </div>
                <div className="textArea">
                  <h3 className="projectText">프로젝트 설명</h3>
                  <span className="text">프로젝트 설명</span>
                </div>
                <ul className="tagArea">
                  <li className="tag">html5</li>
                  <li className="tag">css</li>
                  <li className="tag">javascript</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectGroup">
              <div className="imgArea">
                <img src="" alt="" />
              </div>
              <div className="projectBox">
                <div className="titleArea">
                  <h3 className="projectTitle">프로젝트 이름</h3>
                  <span className="title">프로젝트 이름</span>
                  <Link to="/" className="link">
                    레포 링크
                  </Link>
                </div>
                <div className="textArea">
                  <h3 className="projectText">프로젝트 설명</h3>
                  <span className="text">프로젝트 설명</span>
                </div>
                <ul className="tagArea">
                  <li className="tag">html5</li>
                  <li className="tag">css</li>
                  <li className="tag">javascript</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectGroup">
              <div className="imgArea">
                <img src="" alt="" />
              </div>
              <div className="projectBox">
                <div className="titleArea">
                  <h3 className="projectTitle">프로젝트 이름</h3>
                  <span className="title">프로젝트 이름</span>
                  <Link to="/" className="link">
                    레포 링크
                  </Link>
                </div>
                <div className="textArea">
                  <h3 className="projectText">프로젝트 설명</h3>
                  <span className="text">프로젝트 설명</span>
                </div>
                <ul className="tagArea">
                  <li className="tag">html5</li>
                  <li className="tag">css</li>
                  <li className="tag">javascript</li>
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
