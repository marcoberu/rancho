import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import { FaHome, FaSearch, FaMoon, FaSun, FaWallet } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';
import { MdNotifications, MdAnalytics, MdOutlineLogout } from 'react-icons/md';
import { AiFillLike } from 'react-icons/ai';
import { _Login } from '../../pages/Login';
import { SideSection } from './SideSection';
import { FiChevronDown } from 'react-icons/fi';

const logo = require('../../assets/img/User-Profile-PNG-High-Quality-Image.png');

const rolePermission = {
  admin: [
    {
      label: 'Tablero',
      href: 'home',
      icon: FaHome,
    },
    {
      label: 'Almacén',
      href: 'almacen',
      icon: BsBarChartFill,
    },
    {
      label: 'Notificaciones',
      href: 'notificaciones',
      icon: MdNotifications,
    },
    {
      label: 'Analíticos',
      href: 'analiticos',
      icon: MdAnalytics,
    },
    {
      label: 'Empleados',
      href: 'empleados',
      icon: AiFillLike,
    },
    {
      label: 'Cartera',
      href: 'cartera',
      icon: FaWallet,
    },
    {
      label: 'Test',
      href: 'test',
      icon: FaWallet,
    },
  ],
  employee: [
    {
      label: 'Tablero',
      href: 'home',
      icon: FaHome,
    },
    {
      label: 'Almacén',
      href: 'almacen',
      icon: BsBarChartFill,
    },
  ],
};
export const Sidebar = ({ setAuth, auth }: _Login) => {
  const [close, setClose] = useState('close');
  const location = useLocation();

  const body: HTMLElement = document.querySelector('body')!;
  const modeText: HTMLElement = document.querySelector('.mode-text')!;

  return (
    <>
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
                <Link to={'/almacen'}>
                  <BsBarChartFill className='icon' />
                  <span className='text nav-text'>Almacen</span>
                  <FiChevronDown className='icon' />
                </Link>
              </li>

              {rolePermission[auth!.role as keyof typeof rolePermission].map(
                (section) => {
                  return (
                    <li key={section.label} className='nav-link'>
                      <Link
                        to={section.href}
                        className={
                          location.pathname.includes(section.href)
                            ? 'active'
                            : ''
                        }
                      >
                        <section.icon className='icon' />
                        <span className='text nav-text'>{section.label}</span>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div className='bottom-content'>
            <li
              onClick={(e) => {
                body.classList.remove('dark');
                setAuth({ isAuthenticated: false, role: '' });
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
                    modeText.innerText = 'Modo Claro';
                  } else {
                    modeText.innerText = 'Modo Oscuro';
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
      <SideSection>
        <Outlet />
      </SideSection>
    </>
  );
};
