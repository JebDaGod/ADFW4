import "./Header.css";
function Header({ storeName, cartCount }) {
    return (
        <header>
            <h1>{storeName}</h1>

            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Build Your PC</a>
                <a href="#">Contact</a>

                <div className="cart-display"> 
                    <span className="cart-icon">🛒</span>
                    <span className="cart-badge">{cartCount}</span> 
                </div>
            </nav>
        </header>
    );
}

export default Header;

