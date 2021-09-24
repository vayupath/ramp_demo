import { useState } from 'react';
import { AiFillMail, AiOutlinePoweroff } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import logo from './assets/images/logo.svg';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <header>
        <div class='container row'>
          <button
            class='nav-toggle'
            aria-label='open navigation'
            onClick={() => {
              setOpen((open) => !open);
            }}
          >
            <span class='hamburger'></span>
          </button>
          <a class='logo' href='#'>
            <img src={logo} alt='conquering responsive layouts'></img>
          </a>
          <nav class={`nav ${open ? 'nav--visible' : ''}`}>
            <ul class='nav__list nav__list--secondary'>
              <li class='nav__item'>
                <a href='#' class='nav__link'>
                  <AiFillMail></AiFillMail>
                </a>
              </li>
              <li class='nav__item'>
                <a href='#' class='nav__link'>
                  <IoMdNotifications></IoMdNotifications>
                </a>
              </li>
              <li class='nav__item nav__item--profile'>
                <span className='nav__profile'>Welcome Ritesh</span>
                <a href='#' class='nav__link'>
                  <AiOutlinePoweroff></AiOutlinePoweroff>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='container'>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
