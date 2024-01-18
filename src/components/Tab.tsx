import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import Main from '../pages/Main';
import About from '../pages/About';
import Work from '../pages/Work';
import Project from '../pages/Project';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Tab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleTabClick = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <div className="tab">
      <ul className="tabList">
        {TAB_MENU.map(menu => (
          <li className="tabItem" key={menu.id}>
            <Link
              to={menu.name.toLowerCase()}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <button type="button" onClick={() => handleTabClick(menu.id)}>
                {menu.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="tabPanels">
        {TAB_MENU.map(menu => (
          <Element
            className="tabPanel"
            key={menu.id}
            name={menu.name.toLowerCase()}
          >
            {selectedTab === menu.id && menu.component}
          </Element>
        ))}
      </div>
    </div>
  );
};

export default Tab;

const TAB_MENU = [
  { id: 1, name: 'Main', component: <Main /> },
  { id: 2, name: 'About', component: <About /> },
  { id: 3, name: 'Work', component: <Work /> },
  { id: 4, name: 'Project', component: <Project /> },
  { id: 5, name: 'Blog', component: <Blog /> },
  { id: 6, name: 'Contact', component: <Contact /> },
];
