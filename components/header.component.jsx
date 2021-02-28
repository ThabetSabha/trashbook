const Header = ({ changeTheme, theme }) => {
  const isDarkMode = theme === "dark";

  return (
    <div className="nav-container">
      <nav>
        <div className="logo-and-icons-container">
          <h1 id="logo" onClick={changeTheme}>
            Trash
          </h1>
          <div onClick={changeTheme} className="theme-icons-container">
            {isDarkMode ? <div>🌙</div> : <div>☀️</div>}
          </div>
        </div>

        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a className="order-button" href="#order">
              Order
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
