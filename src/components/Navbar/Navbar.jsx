import React, { useRef, useState } from 'react';
import menuIcon from '../../assets/menu-scale.svg';

const Navbar = () => {
  const responsiveRef = useRef();
  const overlay = useRef();
  const [open, setOpen] = useState(false);

  const responsiveOpen = () => {
    if (!open) {
      setOpen(true);
      responsiveRef.current.style.transform = 'translateX(0)';
      responsiveRef.current.style.display = 'flex';
      overlay.current.style.display = 'block';
      setTimeout(() => {
        overlay.current.style.backdropFilter = 'blur(5px)';
      }, 10);
    } else {
      setOpen(false);
      responsiveRef.current.style.transform = 'translateX(100%)';
      overlay.current.style.backdropFilter = 'none';
      setTimeout(() => {
        overlay.current.style.display = 'none';
      }, 300); // Animasyon süresi kadar bekleyip overlay'i gizliyoruz
    }
  };

  const closeMenu = () => {
    setOpen(false);
    responsiveRef.current.style.transform = 'translateX(100%)';
    overlay.current.style.backdropFilter = 'none';
    setTimeout(() => {
      overlay.current.style.display = 'none';
    }, 300);
  };

  return (
    <div className="navbar__body lg:px-[80px] p-[16px] flex lg:py-6 justify-between items-center relative">
      <div className="navbar__left">
        <p className="font-bold text-[32px] text-[#78350F]">Collers</p>
      </div>
      <div className="navbar__right hidden lg:flex justify-between gap-[16px] items-center">
        <p className="navbar__link">Products</p>
        <p className="navbar__link">Solutions</p>
        <p className="navbar__link">Pricing</p>
        <p className="navbar__link">Resources</p>
        <p className="navbar__link">Log In</p>
        <p className="navbar__link px-4 py-5 border-2 w-[125px] h-[24px] border-[#78350F] border-solid flex items-center justify-center rounded-[8px]">
          Sign up now
        </p>
      </div>
      <div className="responsiveNavbar flex lg:hidden" onClick={responsiveOpen}>
        <img src={menuIcon} alt="Menü Icon" />
      </div>

      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
        ref={overlay}
        style={{ display: 'none' }}
        onClick={closeMenu}
      ></div>

      <div
        className={`responsive__navbar fixed top-0 right-0 h-full w-[200px] bg-white flex-col gap-8 transform ${open ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
        ref={responsiveRef}
      >
        <div onClick={closeMenu} className='text-end w-full flex items-end justify-end p-4'>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Close_MD">
              <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
        </div>

        <p className="navbar__link">Products</p>
        <p className="navbar__link">Solutions</p>
        <p className="navbar__link">Pricing</p>
        <p className="navbar__link">Resources</p>
        <p className="navbar__link">Log In</p>
        <p className="navbar__link">Sign up now</p>
      </div>
    </div>
  );
};

export default Navbar;
