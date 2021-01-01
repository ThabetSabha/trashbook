const Header = ({ changeTheme, theme }) => {
    return (
        <div className={`nav-container ${theme}`}>
            <nav>
                <h1 id="logo" onClick={changeTheme}>Trash</h1>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a className="order-button" href="#order">Order</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;