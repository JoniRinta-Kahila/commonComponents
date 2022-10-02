import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export type navbarPosition =
  | 'absolute'
  | 'fixed'
  | 'inherit'
  | 'initial'
  | 'relative'
  | 'revert'
  | 'static'
  | 'sticy'
  | 'unset';

export interface NavbarProps {
  menuRendererCenter?: React.ReactNode;
  menuRendererEnd?: React.ReactNode;
  hamburgerMenuRenderer?: React.ReactNode;
  logoRenderer?: React.ReactNode;
  hideNavbarOnScroll?: boolean;
  mobileMenuDefaultOpen?: boolean;
  navbarPosition?: navbarPosition;
}

export const Navbar: React.FC<NavbarProps> = ({
  menuRendererCenter = null,
  menuRendererEnd = null,
  logoRenderer = null,
  hamburgerMenuRenderer = null,
  hideNavbarOnScroll = false,
  mobileMenuDefaultOpen = false,
  navbarPosition = 'fixed',
}) => {
  const [menuVisibility, setMenuVisibility] = useState<boolean>(mobileMenuDefaultOpen);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarRef: LegacyRef<HTMLUListElement> | undefined | any = useRef(null);
  const burgerMenuRef: LegacyRef<HTMLUListElement> | undefined | any = useRef(null);

  // close burgermenu on click outside of menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
        const brgrMenuBtnElNames = ['svg', 'path'];
        const clickedElementName = Object.values((event as any).path as HTMLElement[])[0].tagName;

        if (brgrMenuBtnElNames.includes(clickedElementName)) {
          setMenuVisibility(true); // true because onClick set menu visibility to !menuVisibility after this handler.
        } else {
          setMenuVisibility(false);
        }
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
      {/* logorenderer */}
      <div className='logoRenderer'>{logoRenderer}</div>

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
