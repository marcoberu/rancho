import { useState } from 'react';

import { FaHome, FaSearch, FaMoon, FaSun, FaWallet } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';
import { MdNotifications, MdAnalytics, MdOutlineLogout } from 'react-icons/md';
import { AiFillLike } from 'react-icons/ai';
import { _Login } from '../../pages/Login';

const logo = require('../../assets/img/User-Profile-PNG-High-Quality-Image.png');
export const Sidebar = ({ setAuth }: _Login) => {
  const [close, setClose] = useState('close');

  const body: HTMLElement = document.querySelector('body')!;
  const modeText: HTMLElement = document.querySelector('.mode-text')!;

  return (
    <nav className={`sidebar ${close}`}>
      <header>
        <div className='image-text'>
          <span className='image'>
            <img src={logo} alt='logo' />
          </span>
          <div className='text header-text'>
            <span className='name'>San Jósesin</span>
            <span className='profession'>Contador</span>
          </div>
        </div>
        <BiChevronRight
          onClick={() => {
            if (close.length > 0) {
              setClose('');
            } else {
              setClose('close');
            }
          }}
          className='toggle'
        />
      </header>
      <div className='menu-bar'>
        <div className='menu'>
          <li
            onClick={(e) => {
              setClose('');
            }}
            className='search-box'
          >
            <FaSearch className='icon' />
            <input type='search' placeholder='Search...' />
          </li>
          <ul className='menu-links'>
            <li className='nav-link'>
              <a href='/private'>
                <FaHome className=' icon' />
                <span className='text nav-text'> Tablero</span>
              </a>
            </li>
            <li className='nav-link'>
              <a href='/private'>
                <BsBarChartFill className=' icon' />
                <span className='text nav-text'> Entradas</span>
              </a>
            </li>
            <li className='nav-link'>
              <a href='/private'>
                <MdNotifications className=' icon' />
                <span className='text nav-text'> Notificaciones</span>
              </a>
            </li>
            <li className='nav-link'>
              <a href='/private'>
                <MdAnalytics className=' icon' />
                <span className='text nav-text'> Analíticos</span>
              </a>
            </li>
            <li className='nav-link'>
              <a href='/private'>
                <AiFillLike className='icon' />
                <span className='text nav-text'> Empleados</span>
              </a>
            </li>
            <li className='nav-link'>
              <a href='/private'>
                <FaWallet className=' icon' />
                <span className='text nav-text'> Cartera</span>
              </a>
            </li>
          </ul>
        </div>

        <div className='bottom-content'>
          <li
            onClick={(e) => {
              setAuth({ isAuthenticated: false });
            }}
            className='logout'
          >
            <MdOutlineLogout className='icon' />
            <span className='text nav-text'> Logout</span>
          </li>
          <li className='mode'>
            <div className='moon-sun'>
              <FaMoon className=' mode-icon icon moon' />
              <FaSun className='mode-icon icon sun' />
            </div>
            <span className='mode-text text'>Dark Mode</span>

            <div
              onClick={(e) => {
                body.classList.toggle('dark');
                if (body.classList.contains('dark')) {
                  modeText.innerText = 'Light Mode';
                } else {
                  modeText.innerText = 'Dark Mode';
                }
              }}
              className='toggle-switch'
            >
              <span className='switch'></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};
