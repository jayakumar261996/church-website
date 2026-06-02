import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Ministries', to: '/ministries' },
    { label: 'Events', to: '/events' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Give', to: '/give' },
  ];

  return (
    <header className="main-header">
      <div className="header-inner section">
        <nav className="header-nav">
          <div className="header-logo">
            <img src="/img/icon.svg" alt="Ankur Narula Ministries logo" />
            <p className="header-title">Ankur Narula Ministries</p>
          </div>

          <ul className="header-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `header-nav-link ${isActive ? 'active' : ''}`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="header-contact-button">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}