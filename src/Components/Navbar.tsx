import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const [hidden, setHidden] = useState<string>("hidden");
  const smarPhoneToggle=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    if(hidden==="hidden"){
        setHidden("");
    }
    else{
        if(hidden===""){
            setHidden("hidden");
        }
    }
  }

  const [blue,setblue]= useState<string>("blue");
  const markblue = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, color: string) => {
    setblue(color); // Set the clicked tab's color to blue
  
    // Loop through all the tabs and set their color to gray except for the clicked tab
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach((tab: Element) => {
      const tabElement = tab as HTMLElement; // Cast the Element to HTMLElement
      if (tab === e.currentTarget) {
        tabElement.classList.add(`text-${color}-700`); // Add blue color class to clicked tab
      } else {
        tabElement.classList.remove('text-blue-700', 'text-gray-700'); // Remove blue and gray color classes from other tabs
        tabElement.classList.add('text-gray-700'); // Add gray color class to other tabs
      }
    });
  };
  
  

  return (
    <div className='Navbar'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={dropdownVisible}
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
            {/* Dropdown menu */}
            {dropdownVisible && (
              <div ref={dropdownRef} className="z-50 absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link to="dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="setting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                  </li>
                  <li>
                    <Link to="earning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
                  </li>
                  <li>
                    <Link to="signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                  </li>
                </ul>
              </div>
            )}
            <button data-collapse-toggle="navbar-user" type="button" onClick={smarPhoneToggle} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between ${hidden} w-full md:flex md:w-auto md:order-1`} id='navbar-user'>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <Link to="home" onClick={(e) => markblue(e, 'blue')} className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:text-blue-700`} aria-current="page">Home</Link>
              </li>
              <li>
              <Link to="about" onClick={(e) => markblue(e, 'blue')} className={`nav-link block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>About</Link>
              </li>
              <li>
              <Link to="services" onClick={(e) => markblue(e, 'blue')} className={`nav-link block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>Services</Link>
              </li>
              <li>
              <Link to="pricing" onClick={(e) => markblue(e, 'blue')} className={`nav-link block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>Pricing</Link>
              </li>
              <li>
              <Link to="contact" onClick={(e) => markblue(e, 'blue')} className={`nav-link block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
