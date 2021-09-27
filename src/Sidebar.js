import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <main className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className='logo'>
        <img src={logo} alt='coding addict' className='logo-img' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='nav-link'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url} className='link-btn'>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-link'>
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url} className='social-btn'>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Sidebar;
