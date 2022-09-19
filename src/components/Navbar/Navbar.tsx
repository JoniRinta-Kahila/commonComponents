import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export enum ENavbarPosition {
  'absolute' = 'absolute',
  'fixed' = 'fixed',
  'inherit' = 'inherit',
  'initial' = 'initial',
  'relative' = 'relative',
  'revert' = 'revert',
  'static' = 'static',
  'sticy' = 'sticy',
  'unset' = 'unset',
}

export interface NavbarProps {
  logoSrc?: string;
  logoLink?: string;
  menuRendererCenter?: React.ReactNode;
  menuRendererEnd?: React.ReactNode;
  hamburgerMenuRenderer?: React.ReactNode;
  hideNavbarOnScroll?: boolean;
  mobileMenuDefaultOpen?: boolean;
  navbarPosition?: ENavbarPosition;
}

export const Navbar: React.FC<NavbarProps> = ({
  logoSrc = undefined,
  logoLink = '.',
  menuRendererCenter = null,
  menuRendererEnd = null,
  hamburgerMenuRenderer = null,
  hideNavbarOnScroll = false,
  mobileMenuDefaultOpen = false,
  navbarPosition = ENavbarPosition.fixed,
}) => {
  const [menuVisibility, setMenuVisibility] = useState<boolean>(mobileMenuDefaultOpen);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarRef: LegacyRef<HTMLUListElement> | undefined | any = useRef(null);
  const burgerMenuRef: LegacyRef<HTMLUListElement> | undefined | any = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
        setMenuVisibility(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [burgerMenuRef]);

  // display & hide navbar by scroll
  useEffect(() => {
    if (!hideNavbarOnScroll) return;

    const handleScroll = () => {
      const position = window.scrollY;
      navbarRef.current.style.top = prevScrollPos >= position ? '0' : '-93px';
      setPrevScrollPos(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideNavbarOnScroll, prevScrollPos]);

  return (
    <nav
      ref={navbarRef}
      className={'container'}
      data-testid='test-burger'
      data-position={navbarPosition}
    >
      {/* Logo */}
      <div className={'logo'}>
        <a href={logoLink}>
          <img src={logoSrc} alt='logo' height={30} width='auto' />
        </a>
      </div>

      {/* linkrenderer center */}
      <div className={'navbar-menu-renderer-center'} style={{ marginLeft: 'auto' }}>
        {menuRendererCenter}
      </div>

      {/* linkrenderer end */}
      <div
        className={'navbar-menu-renderer-end'}
        style={{ marginLeft: 'auto', marginRight: '10px' }}
      >
        {menuRendererEnd}
      </div>

      {/* hamburder menu */}
      <span className={'hamburger'}>
        <input
          data-testid='input-element'
          type='checkbox'
          checked={menuVisibility}
          onChange={() => setMenuVisibility(!menuVisibility)}
        />
        <GiHamburgerMenu size={30} onClick={() => setMenuVisibility(!menuVisibility)} />
      </span>
      {menuVisibility ? (
        <div ref={burgerMenuRef} className={'hamburgerMenu'}>
          {hamburgerMenuRenderer}
        </div>
      ) : null}
    </nav>
  );
};
