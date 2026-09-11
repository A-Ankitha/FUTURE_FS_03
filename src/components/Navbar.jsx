import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Moon,
  Sun,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Visit Us', path: '/visit' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  /* =====================================================
     SCROLL STATE
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  /* =====================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ===================================================== */

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);


  /* =====================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);


  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);


  /* =====================================================
     HELPERS
  ===================================================== */

  const isActive = (path) => {
    return location.pathname === path;
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <>
      {/* ===================================================
          DESKTOP / MAIN NAVBAR
      =================================================== */}

      <header
        className={`navbar ${scrolled ? 'scrolled' : ''} ${
          !isHomePage ? 'page-navbar' : ''
        }`}
      >

        <div className="container navbar-inner">

          {/* -------------------------------------------------
              LOGO
          ------------------------------------------------- */}

          <Link
            to="/"
            className="brand"
            aria-label="Itadaki Ramen Shop home"
          >

            <span className="brand-kanji">
              頂
            </span>

            <span className="brand-text">

              <strong>
                ITADAKI
              </strong>

              <small>
                RAMEN SHOP
              </small>

            </span>

          </Link>


          {/* -------------------------------------------------
              DESKTOP NAVIGATION
          ------------------------------------------------- */}

          <nav
            className="desktop-nav"
            aria-label="Main navigation"
          >

            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  isActive(link.path)
                    ? 'active'
                    : ''
                }
              >
                {link.label}
              </Link>
            ))}

          </nav>


          {/* -------------------------------------------------
              NAVBAR ACTIONS
          ------------------------------------------------- */}

          <div className="navbar-actions">

            {/* Desktop theme toggle */}
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              title={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {theme === 'dark' ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>


            {/* Desktop enquiry button */}
            <Link
              to="/contact"
              className="btn-primary navbar-cta"
            >
              Enquire
              <ArrowRight size={14} />
            </Link>


            {/* Mobile hamburger */}
            <button
              type="button"
              className={`mobile-menu-trigger ${
                menuOpen ? 'open' : ''
              }`}
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={
                menuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
            >

              {menuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}

            </button>

          </div>

        </div>

      </header>


      {/* ===================================================
          MOBILE MENU BACKDROP
      =================================================== */}

      <div
        className={`mobile-menu-backdrop ${
          menuOpen ? 'open' : ''
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />


      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      <aside
        id="mobileMenu"
        className={`mobile-menu ${
          menuOpen ? 'open' : ''
        }`}
        aria-hidden={!menuOpen}
      >

        <div className="mobile-menu-inner">

          {/* -------------------------------------------------
              MENU HEADER
          ------------------------------------------------- */}

          <div className="mobile-menu-heading">

            <span>
              NAVIGATION
            </span>

            <div />

            <small>
              いただきます
            </small>

          </div>


          {/* -------------------------------------------------
              LINKS
          ------------------------------------------------- */}

          <nav
            className="mobile-menu-links"
            aria-label="Mobile navigation"
          >

            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  isActive(link.path)
                    ? 'active'
                    : ''
                }
                onClick={closeMenu}
                style={{
                  '--menu-delay': `${index * 55}ms`,
                }}
              >

                <span className="mobile-link-number">
                  0{index + 1}
                </span>

                <span className="mobile-link-name">
                  {link.label}
                </span>

                <ArrowRight
                  size={17}
                  className="mobile-link-arrow"
                  aria-hidden="true"
                />

              </Link>
            ))}

          </nav>


          {/* -------------------------------------------------
              MOBILE THEME SWITCH
          ------------------------------------------------- */}

          <div className="mobile-theme-row">

            <div>
              <span className="mobile-theme-title">
                Appearance
              </span>

              <span className="mobile-theme-value">
                {theme === 'dark'
                  ? 'Dark mode'
                  : 'Light mode'}
              </span>
            </div>

            <button
              type="button"
              className="mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >

              {theme === 'dark' ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}

              <span>
                {theme === 'dark'
                  ? 'Light'
                  : 'Dark'}
              </span>

            </button>

          </div>


          {/* -------------------------------------------------
              CTA
          ------------------------------------------------- */}

          <Link
            to="/contact"
            className="btn-primary mobile-menu-cta"
            onClick={closeMenu}
          >
            Make an Enquiry
            <ArrowRight size={17} />
          </Link>


          {/* -------------------------------------------------
              FOOTER DECORATION
          ------------------------------------------------- */}

          <div className="mobile-menu-footer">

            <span>
              ITADAKI RAMEN SHOP
            </span>

            <i />

            <span>
              MANGALORE
            </span>

          </div>

        </div>

      </aside>


      {/* ===================================================
          NAVBAR-SPECIFIC RESPONSIVE CSS

          Kept here so the mobile navigation cannot be
          broken by unrelated page styles.
      =================================================== */}

      <style>{`

        /* ===============================================
           BASE MOBILE MENU
        =============================================== */

        .mobile-menu,
        .mobile-menu-backdrop {
          display: none;
        }


        /* ===============================================
           MOBILE
        =============================================== */

        @media (max-width: 768px) {

          .navbar {
            z-index: 1200;
          }


          .navbar-inner {
            position: relative;
            z-index: 1201;
          }


          .desktop-nav,
          .navbar-cta {
            display: none !important;
          }


          .navbar-actions {
            display: flex;
            align-items: center;
            gap: 8px;
          }


          .theme-toggle {
            display: none !important;
          }


          .mobile-menu-trigger {
            width: 44px;
            height: 44px;

            display: grid !important;
            place-items: center;

            padding: 0;

            border: 1px solid
              rgba(255,255,255,0.38);

            border-radius: 10px;

            background: rgba(0,0,0,0.18);

            color: #FBF1EA;

            transition:
              color .25s ease,
              background .25s ease,
              border-color .25s ease,
              transform .25s ease;
          }


          .navbar.scrolled .mobile-menu-trigger {
            border-color:
              var(--color-border);

            background:
              transparent;

            color:
              var(--color-text);
          }


          .mobile-menu-trigger:hover,
          .mobile-menu-trigger.open {
            color:
              var(--color-sakura);

            border-color:
              var(--color-sakura);

            background:
              rgba(178,58,58,0.08);
          }


          /* =============================================
             BACKDROP
          ============================================= */

          .mobile-menu-backdrop {
            position: fixed;

            inset: 0;

            z-index: 1090;

            display: block;

            background:
              rgba(5,4,4,0.58);

            backdrop-filter:
              blur(5px);

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transition:
              opacity .35s ease,
              visibility .35s ease;
          }


          .mobile-menu-backdrop.open {
            opacity: 1;

            visibility: visible;

            pointer-events: auto;
          }


          /* =============================================
             MOBILE PANEL
          ============================================= */

          .mobile-menu {
            position: fixed;

            top: 68px;
            right: 0;
            bottom: 0;
            left: 0;

            z-index: 1100;

            display: block;

            overflow-y: auto;

            overscroll-behavior: contain;

            background:
              var(--color-bg);

            color:
              var(--color-text);

            border-top:
              1px solid var(--color-border);

            box-shadow:
              0 25px 60px
              rgba(0,0,0,0.35);

            transform:
              translateY(-14px);

            opacity: 0;

            visibility: hidden;

            pointer-events: none;

            transition:
              transform .35s
                cubic-bezier(.22,1,.36,1),
              opacity .3s ease,
              visibility .3s ease;
          }


          .mobile-menu.open {
            transform:
              translateY(0);

            opacity: 1;

            visibility: visible;

            pointer-events: auto;
          }


          .mobile-menu-inner {
            min-height:
              calc(100% - 1px);

            width:
              min(100%, 620px);

            margin:
              0 auto;

            padding:
              28px 22px 24px;

            display:
              flex;

            flex-direction:
              column;
          }


          /* =============================================
             HEADING
          ============================================= */

          .mobile-menu-heading {
            display: flex;
            align-items: center;

            gap: 10px;

            margin-bottom: 8px;

            color:
              var(--color-gold);

            font-size: 8px;
            font-weight: 700;

            letter-spacing: 3px;

            text-transform: uppercase;
          }


          .mobile-menu-heading div {
            width: 25px;
            height: 1px;

            background:
              var(--color-border);
          }


          .mobile-menu-heading small {
            margin-left: auto;

            font-family:
              "Noto Serif JP",
              serif;

            font-size: 10px;

            letter-spacing: 1px;
          }


          /* =============================================
             LINKS
          ============================================= */

          .mobile-menu-links {
            display: flex;
            flex-direction: column;
          }


          .mobile-menu-links a {
            position: relative;

            display: grid;

            grid-template-columns:
              30px minmax(0,1fr) 22px;

            align-items: center;

            gap: 8px;

            min-height: 65px;

            padding: 12px 2px;

            border-bottom:
              1px solid var(--color-border);

            color:
              var(--color-text);

            text-decoration: none;

            opacity: 0;

            transform:
              translateY(10px);

            transition:
              color .25s ease,
              padding-left .25s ease,
              background .25s ease;

            transition-delay:
              0s;
          }


          .mobile-menu.open .mobile-menu-links a {
            animation:
              mobileNavReveal .42s
              cubic-bezier(.22,1,.36,1)
              forwards;

            animation-delay:
              var(--menu-delay);
          }


          .mobile-menu-links a:hover,
          .mobile-menu-links a.active {
            color:
              var(--color-sakura);

            padding-left:
              8px;
          }


          .mobile-menu-links a.active::before {
            content: "";

            position: absolute;

            left: -22px;
            top: 14px;
            bottom: 14px;

            width: 3px;

            border-radius: 0 3px 3px 0;

            background:
              var(--color-sakura);
          }


          .mobile-link-number {
            color:
              var(--color-gold);

            font-size:
              8px;

            font-weight:
              700;

            letter-spacing:
              1px;

            opacity:
              .7;
          }


          .mobile-link-name {
            font-family:
              "Playfair Display",
              Georgia,
              serif;

            font-size:
              23px;

            line-height:
              1.1;
          }


          .mobile-link-arrow {
            opacity:
              .35;

            transition:
              transform .25s ease,
              opacity .25s ease;
          }


          .mobile-menu-links a:hover .mobile-link-arrow,
          .mobile-menu-links a.active .mobile-link-arrow {
            opacity:
              1;

            transform:
              translateX(3px);
          }


          /* =============================================
             THEME ROW
          ============================================= */

          .mobile-theme-row {
            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 15px;

            margin-top: 24px;

            padding:
              16px 0;

            border-bottom:
              1px solid var(--color-border);
          }


          .mobile-theme-row > div {
            display: flex;
            flex-direction: column;

            gap: 4px;
          }


          .mobile-theme-title {
            color:
              var(--color-text);

            font-size:
              12px;

            font-weight:
              600;
          }


          .mobile-theme-value {
            color:
              var(--color-text-muted);

            font-size:
              9px;
          }


          .mobile-theme-toggle {
            display: inline-flex;
            align-items: center;

            gap: 7px;

            min-height:
              40px;

            padding:
              8px 13px;

            border:
              1px solid var(--color-border);

            border-radius:
              8px;

            background:
              var(--color-surface);

            color:
              var(--color-text);

            font-size:
              10px;

            font-weight:
              700;
          }


          .mobile-theme-toggle:hover {
            color:
              var(--color-sakura);

            border-color:
              var(--color-sakura);
          }


          /* =============================================
             CTA
          ============================================= */

          .mobile-menu-cta {
            width:
              100%;

            min-height:
              52px;

            margin-top:
              22px;

            justify-content:
              center;

            font-size:
              13px;
          }


          /* =============================================
             FOOTER
          ============================================= */

          .mobile-menu-footer {
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 9px;

            margin-top: auto;

            padding-top: 30px;

            color:
              var(--color-text-muted);

            font-size:
              7px;

            font-weight:
              700;

            letter-spacing:
              2px;
          }


          .mobile-menu-footer i {
            width:
              18px;

            height:
              1px;

            background:
              var(--color-gold);

            opacity:
              .5;
          }


          @keyframes mobileNavReveal {
            from {
              opacity: 0;

              transform:
                translateY(10px);
            }

            to {
              opacity: 1;

              transform:
                translateY(0);
            }
          }

        }


        /* ===============================================
           SMALL PHONES
        =============================================== */

        @media (max-width: 420px) {

          .mobile-menu-inner {
            padding:
              24px 18px 20px;
          }


          .mobile-menu-links a {
            min-height:
              59px;
          }


          .mobile-link-name {
            font-size:
              21px;
          }


          .mobile-menu-heading {
            font-size:
              7px;

            letter-spacing:
              2.5px;
          }


          .mobile-menu-footer {
            font-size:
              6px;

            letter-spacing:
              1.5px;
          }

        }


        /* ===============================================
           DESKTOP
        =============================================== */

        @media (min-width: 769px) {

          .mobile-menu,
          .mobile-menu-backdrop {
            display:
              none !important;
          }

          .mobile-menu-trigger {
            display:
              none !important;
          }

        }

      `}</style>
    </>
  );
}