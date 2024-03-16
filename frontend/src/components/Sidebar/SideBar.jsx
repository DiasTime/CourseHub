import './sidebar.css';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

function SideBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="sidebar">
        <button onClick={() => setOpen((prev) => !prev)}>
          {open ? <IoClose /> : <RxHamburgerMenu />}
        </button>
        <div className={open ? ' sidebarItems' : 'hidden sidebarItems'}>
          <a class="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
}

export default SideBar;
